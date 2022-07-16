import Button from "../../../../components/Button/Button";
import {isMobilePhone} from "validator";
import { needOtpForEmail } from "../../../../api/user-api";
import { useState , useEffect , useCallback } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {setUser} from "../../../../app/auth";

function PhonePhone({setStep}) {
    const dispatch = useDispatch();
    // states
    const [mobile , setMobile] = useState("");
    const [disable , setDisable] = useState(true);

    // handlers
    const mobileHandler=(e)=>{
        setMobile(e.target.value.substring(0 , 10));
    };

     // this function will validate the states and return false if validate success
    const validater = useCallback(() => {
        if (!isMobilePhone(mobile, ["en-IN"])) {
        return true;
        }else {
        return false;
        }
    },[mobile]);

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

    // Login onClick
    const onLoginPress=async(e)=>{
        // validation
        if(disable) return toast.error("Error! your entered invalid phone number");

        // api request
        try {
            const {data} = await needOtpForEmail({mobile});

            // logic
            if(data.flag){
                // dispatching
                dispatch(setUser({data:data.data , hash:data.hash}));
                // redirecting to the next page
                setStep(1);
                // show message
                toast.success("Otp sent! Please check message");
            };

        } catch (error) {
            if(error.response.data){
                toast.error(error.response.data.msg);
            }else{
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            {/* card topbaar */}
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/phone-head.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Enter Your Mobile</p>
            </div>

            {/* card content  */}
            <div className="overflow-hidden input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
                <img className="w-9 mr-2" src="images/phone-inp.svg" alt="" />
                <input value={mobile} onChange={mobileHandler} className="w-[171px] caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="1234567890" type="number" />
            </div>
            <span className="text-sm block mx-auto font-semibold font-nunito text-[#C4C5C5] text-center">Login via Mobile</span>

            <Button path={"images/right_arrow.svg"} text={"Next"} onClick={onLoginPress}/>
        </>
    )
}

export default PhonePhone