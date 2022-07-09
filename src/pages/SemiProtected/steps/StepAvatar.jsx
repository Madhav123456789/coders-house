import Button from "../../../components/Button/Button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { needActivate } from "../../../api/user-api";
import {setUser} from "../../../app/user";
import {activate} from "../../../app/auth";

function StepAvatar({setLoading}) {
    const dispatch = useDispatch();
    // getting avtaar and name from redux
    const {name} = useSelector(s=>s.auth.user);
    // states
    const [avtaar , setAvtaar] = useState(null);

     // this function will be used to capture image
    // this function is used to select files and it is onChange function
    const captureImage = (e) => {
        // getting file from Element object.filesArray
        const file = e.target.files[0];
        // console.log(file)
        // this  is a array to check that user's selected file is valid or not
        const validfiles = ["image/png"/*, "image/svg+xml"*/, "image/jpg", "image/jpeg"];
        if (file) {
        if (validfiles.includes(file.type)) {
            // this is file reader api and it's an in built function/api
            const reader = new FileReader();
            reader.readAsDataURL(file);
            // this is it's callback
            reader.onloadend = () => {
                toast.success("Post image has been selected");
                setAvtaar(reader.result);
                // console.log(reader.result);
            }
        } else {
            toast.error("Unsupported file format");
        }
        }
    };

    // Next onClick
    const onPressNext=async()=>{
        setLoading(true);
        // request api
        try {
            const {data} = await needActivate({name:name.trim() , avtaar});

            if(data.flag){
                // setting user
                dispatch(setUser(data.user));
                // setting activated
                dispatch(activate(data.user.activated));
            };

        } catch (error) {
            if(error.response.data){
                toast.error(error.response.data.msg);
            }else{
                toast.error(error.message);
            };
        }finally{
            setLoading(false);
        };
    };

    return (
        <>
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/act-avtaar-monkey.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Okay, Rakesh k!</p>
            </div>

            <div className="how text-center text-sm font-nunito mt-2 font-normal text-[#C4C5C5]">
                How's this photo
            </div>

            {/* card content  */}
            <label htmlFor="avtaar-select" className="border-[#0077FF] flex justify-center items-center cursor-pointer bg-transparent border-4 w-28 h-28 m-auto rounded-[50%] my-3">
                <img src={avtaar||"images/avtaar.svg"} className='w-[6.3rem] h-[6.3rem] object-cover rounded-[50%] select-none' alt="" />

                <input onChange={captureImage} id='avtaar-select' className="hidden" placeholder="Your name" type="file" accept='image/*' />
            </label>
            <span className="font-normal w-[57%] text-sm block mx-auto font-nunito text-[#C4C5C5] text-center">{'People use real names at codershouse :)'}</span>
            <Button path={"images/right_arrow.svg"} onClick={onPressNext} text={"Next"} />
        </>
    )
}

export default StepAvatar