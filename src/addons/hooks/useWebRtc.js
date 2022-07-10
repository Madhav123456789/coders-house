import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useStateCallback } from "./useStateCallback";

export const useWebRtc = (roomId , user)=>{
    const [cleints , setCleints] = useStateCallback([]);
    const audioElements = useRef(new Map());
    const connections = useRef(new Map());
    const localMediaStream = useRef(null);

    // for setting audio elements
    const provideRef = (instance , userId)=>{
        audioElements.current.set(userId , instance);
        console.log(userId)
    };

    // used to add client into the state with and verify user should not already exist
    const setNewClient = useCallback((newClient , cb)=>{
        const lookingFor = cleints.find(cleint => cleint._id === user._id);
        if(!lookingFor){
            setCleints([...cleints , newClient] ,cb);
        }
    },[cleints , setCleints]);

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
                const localElement = audioElements.current.get(user._id);
                
                if(localElement){
                    // setting my audio element voice 0
                    localElement.volume = 0;
                    localElement.srcObject = localMediaStream.current;
                };
            })
        });
    });
    

    return [cleints , provideRef];
}