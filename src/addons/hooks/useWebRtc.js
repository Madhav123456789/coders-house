import { useCallback , useEffect , useRef } from "react";
import { useStateCallback } from "./useStateCallback";
import {socketInit} from "../../sockets/connect-io";
import ACTIONS from "../../sockets/io-states";
import freeice from "freeice";

export const useWebRtc = (roomId , user)=>{
    const [cleints , setCleints] = useStateCallback([]);
    const audioElements = useRef({});
    const connections = useRef({});
    const localMediaStream = useRef(null);
    const socket = useRef(null);


    let print = (text="" , type="l")=>{
            if(type === "l"){
                console.log(text);
            }else if(type === "e"){
                console.error(text)
            }else if (type === "w"){
                console.warn(text);
            };
    };

    useEffect(()=>{
            // connecting to socket.io
        socket.current = socketInit();

        // cleanUp
        return ()=>{
            // leaving the room
            localMediaStream.current.getTracks().forEach(track=>track.stop());
            
            // emitting leave 
            socket.current.emit(ACTIONS.LEAVE_ROOM , {roomId})
        };
    },[]);

    // for setting audio elements
    const provideRef = (instance , userId)=>{
        audioElements.current[userId] = instance;
    };

    // used to add client into the state with and verify user should not already exist
    const setNewClient = useCallback((newClient , cb)=>{
        const lookingFor = cleints.find(cleint => cleint._id === user._id);
        if(!lookingFor){
            setCleints((prevs =>{
                return [...prevs , newClient]
            }) ,cb);
        }
    },[cleints]);

    // capturing media
    useEffect(()=>{
        const captureMedia = async()=>{
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio : true
            });
        };

        captureMedia()
        .then(res =>{
            setNewClient(user , ()=>{
                // finding my audio element
                const localElement = audioElements.current[user._id];
                
                if(localElement){
                    // setting my audio element voice 0
                    localElement.volume = 0;
                    localElement.srcObject = localMediaStream.current;
                };

                
                // emitiing join event
                socket.current.emit(ACTIONS.JOIN , {roomId , user});
            });
        });
    },[]);

    useEffect(()=>{
        const handlePeer = async ({peerId , createOffer , user:remoteUser})=>{
            if(peerId in connections.current){
                print(`${peerId} already exist` , "w");
                return ;
            };

            print("Creating new Rtc Object");
            connections.current[peerId] = new RTCPeerConnection({
                iceServers : freeice()
            });

            print("creating icecandidate listner callback");
            connections.current[peerId].onicecandidate = (event)=>{
                print("Emitting Relay Ice event");
                socket.current.emit(ACTIONS.RELAY_ICE , {
                    peerId ,
                    icecandidate : event.candidate
                });

                console.log("candidates : ", event.candidate);
            };

            print("creating track listner callback");
            connections.current[peerId].ontrack = ({
                streams : [remoteStream]
            })=>{
                // saving client
                setNewClient(remoteUser , ()=>{
                    if(audioElements[remoteUser._id]){
                        // setting src object
                        audioElements[remoteUser._id].srcObject = remoteStream; 
                    }else{
                        const interval =  setInterval(()=>{
                            if(audioElements[remoteUser._id]){
                                // setting src object
                                audioElements[remoteUser._id].srcObject = remoteStream;
                                // clearInterval(interval);
                            }
                        },[100]);
                    }
                })
            };

            // add local track to remote connections
            localMediaStream.current.getTracks().forEach(track =>{
                connections.current[peerId].addTrack(track , localMediaStream.current);
            });

            // if offer
            if(createOffer){
                const offer = await connections.current[peerId].createOffer();

                // adding to local description
                connections.current[peerId].setLocalDescription(offer);

                print("Emitting Relay sdp");
                // send offer to another client
                socket.current.emit(ACTIONS.RELAY_SDP , {
                    peerId,
                    sessionDescription : offer
                });
            }
        };

        // listning handle peer
        socket.current.on(ACTIONS.PAIRING , handlePeer);

        return ()=>{
            socket.current.off(ACTIONS.PAIRING);
        }
    },[]);

    // handling icecandidate
    useEffect(()=>{
        socket.current.on(ACTIONS.ICE_CANDIDATE , ({peerId , icecandidate})=>{
            if(icecandidate){
                connections.current[peerId].addIceCandidate(icecandidate);
            }
        });
        // cleaning function
        return ()=>{
            socket.current.off(ACTIONS.ICE_CANDIDATE);
        }
    },[]);

    // handling icecandidate
    useEffect(()=>{
        socket.current.on(ACTIONS.SESSION_DESCRIPTION , async({peerId , sessionDescription})=>{
            await connections.current[peerId].setRemoteDescription(
                new RTCSessionDescription(sessionDescription)
            );

            if(sessionDescription.type === "offer"){
                const answer = await connections.current[peerId].createAnswer();

                connections.current[peerId].setLocalDescription(answer);

                // emitting event
                socket.current.emit(ACTIONS.RELAY_SDP , {
                    peerId , 
                    sessionDescription : answer
                })
            }
        });

        return ()=>{
            socket.current.off(ACTIONS.SESSION_DESCRIPTION);
        }
    },[]);
    
    // handle remove peer
    useEffect(()=>{
        const handleRemovePeer = async({peerId , userId})=>{
            // closing connection
            if(connections.current[peerId]){
                connections.current[peerId].close();
            };

            // deleting connection
            delete connections.current[peerId];
            // deleting audio element
            delete audioElements.current[userId];
            print(cleints)
            print(userId)
            // removing from clients
            setCleints(prevs => prevs.filter(prev => prev._id !== userId));
        };

        socket.current.on(ACTIONS.REMOVE_PEER , handleRemovePeer);
        socket.current.on("disconnecting" , handleRemovePeer);
        return ()=>{
            socket.current.off(ACTIONS.REMOVE_PEER);
        };
    },[]);
    

    return [cleints , provideRef];
}