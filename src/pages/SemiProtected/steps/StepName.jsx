import { useState , useEffect , useCallback } from "react";
import Button from "../../../components/Button/Button";
import { useDispatch , useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setUser} from "../../../app/auth";

function StepName({setStep}) {
    const dispatch = useDispatch();
    // getting name from redux
    const { name:globalName } = useSelector(s=>s.auth.user);

    // states
    const [name , setName] = useState(globalName||"");
    const [disable , setDisable] = useState(true);

    // handlers
    const nameHandler = (e)=>{
        setName(e.target.value);
    };

    // this function will validate the states and return false if validate success
    const validater = useCallback(() => {
        const isFullName = /^([a-z']+(-| )?)+$/i;
        if (!isFullName.test(name.trim()) || name.trim().length < 6) {
            return true;
        }else {
            return false;
        }
    },[name]);

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

    // Next onClick
    const onPressNext=async()=>{
        if(disable) return toast.error("Please enter a valid name");
        // setting name
        dispatch(setUser({name}));
        // going to next
        setStep(1);
    };

    return (
        <>
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/act-name.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Enter Your Full Name</p>
            </div>

            {/* card content  */}
            <div className="input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
                <input value={name} onChange={nameHandler} className="w-64 caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="Your name" type="text" />
            </div>
            <span className="font-normal w-[57%] text-sm block mx-auto font-nunito text-[#C4C5C5] text-center">{'People use real names at codershouse :)'}</span>
            <Button path={"images/right_arrow.svg"} onClick={onPressNext} text={"Next"} />
        </>
    )
}

export default StepName;