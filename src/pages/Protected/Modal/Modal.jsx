import { useState , useCallback , useEffect } from "react";
import Types from "./components/Types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { needCreateRoom } from "../../../api/rooms-api";


function Modal({state , setState}) {
    // states
    const [value, setValue] = useState("open");
    const [title , setTitle] = useState("");
    const [errorMessage , setErrorMessage] = useState("");
    const [disable , setDisable] = useState(true);

    // handlers
    const titleHandler = (e)=>{
        setTitle(e.target.value);
    };
    // on click function for selecting type
    const onRoomTypeClick = (value)=>{
        setValue(value);
    };

    // this function will validate the states and return false if validate success
    const validater = useCallback(() => {
        if (title.length < 10) {
            setErrorMessage("Title length must be greater than or equal to 10 characters");
            return true;
        }else if(title.length > 200){
            setErrorMessage("Title length must be less than or equal to 200 characters");
            return true;
        }
        else {
            return false;
        }
    },[title]);

    // validation watcher function 
    useEffect(() => {
        // console.log("Validating");
        const $result = validater();
        if (!$result) {
        // console.log("Validation Successful");
        setDisable($result);
        } else {
        setDisable($result);
        }
    }, [validater]);

    // Create Room onClick
    const onPressCreateRoom=async()=>{
        if(disable) return toast.error(errorMessage);

        // creating room
        try {
            const {data} = await needCreateRoom({title , type:value});

            if(data.flag){
                toast.success(data.msg);
                // close modal
                closeModal();
            }
            
        } catch (error) {
            if(error.response.data){
                toast.error(error.response.data.msg);
            }else{
                toast.error(error.message);
            }
        }
    };

    // on click function for closing modal
    const closeModal = ()=>{
        // hidding scroll bar
        document.querySelector("*").style.overflow = "auto";
        // setting body overflow
        document.body.style.overflowX = "hidden";
        // setting html overflow
        document.querySelector("html").style.overflowX = "hidden";
        // closing modal
        setState("hidden");
        // reset title
        setTitle("");
    };

    if(!state === "flex"){
        return;
    }

    return (
        <div onClick={closeModal} className={`fixed top-0 w-[100vw] h-[100vh] bg-[#00000099] ${state} items-center justify-center`}>
            <div onClick={(e)=>{e.stopPropagation()}} className="w-[80vw] sm:w-[70vw] lg:w-[40vw] xl:w-[20rem] h-[24rem] mb-[10vh] lg:mb-0 flex flex-col justify-start lg:h-[21rem] rounded-xl bg-box-color p-5 relative">
                <h1 className="text-white font-semibold font-nunito text-sm">Enter the topic to be disscussed</h1>
                <input value={title} onChange={titleHandler} className="outline-none p-3 caret-white text-white bg-input-box w-[100%] h-8 lg:h-6 rounded-md mt-2 mb-4" type="text" />
                <h2 className="text-white font-semibold font-nunito text-sm">Room type</h2>

                {/* types container */}
                <div className="w-full h-24 mt-3 flex justify-between">
                    <Types onClick={onRoomTypeClick} value={"open"} active={value === "open"} src={"Globe.svg"} text={"Open"} />
                    <Types onClick={onRoomTypeClick} value={"social"} active={value === "social"} src={"Users.svg"} text={"Social"} />
                    <Types onClick={onRoomTypeClick} value={"closed"} active={value === "closed"} src={"Lock.svg"} text={"Closed"} />
                </div>

                <hr className="w-[100%] mt-3 mx-auto text-center h-[0.5px] bg-[#ffffff04] border-[0.5px] border-transparent"/>
                
                <h3 className="text-white text-center mt-4 font-semibold font-nunito text-sm">Start a room, open to everyone</h3>

                <div onClick={onPressCreateRoom} className="flex items-center justify-center bg-[#20BD5F] w-36 mx-auto mt-4 rounded-full h-10 lg:h-8 space-x-2">
                    <img className="h-5" src="images/celebration.svg" alt="" />
                    <button className="text-white font-nunito font-semibold">Let's Go</button>
                </div>

                {/* button for closing the modal */}
                <img onClick={closeModal} className="absolute top-3 right-4 cursor-pointer h-4" src="images/cross.svg" alt="" />
            </div>
        </div>
    )
}

export default Modal