import Button from "../../../../components/Button/Button";
import { needOtpForEmail } from "../../../../api/user-api";
import { useState , useEffect , useCallback } from "react";
import {isEmail} from "validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";
import {setUser} from "../../../../app/auth";


function TypeEmail({setStep}) {
    const dispatch = useDispatch();
    // states
    const [email , setEmail] = useState("");
    const [disable , setDisable] = useState(true);
    
    // handlers
    const emailHandler=(e)=>{
        setEmail(e.target.value);
    };

    // this function will validate the states and return false if validate success
  const validater = useCallback(() => {
    if (!isEmail(email)) {
      return true;
    }else {
      return false;
    }
  },[email]);

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
    if(disable) return toast.error("Error! your entered invalid email");

    // api request
    try {
        const {data} = await needOtpForEmail({email});

        // logic
        if(data.flag){
            // dispatching
            dispatch(setUser({data:data.data , hash:data.hash}));
            // redirecting to the next page
            setStep(1);
            // show message
            toast.success("Otp sent! Please check your email");
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
        <div className="overflow-hidden">
            {/* card topbaar */}
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/email-head.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Enter Your Email</p>
            </div>

            {/* card content  */}
            <div className="overflow-hidden input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
                <img className="w-9 mr-2" src="images/email-inp.svg" alt="" />
                <input value={email} onChange={emailHandler} className="caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="Example@email.com" type="email" />
            </div>
            <span className="text-sm block mx-auto font-semibold font-nunito text-[#C4C5C5] text-center">Login via Email</span>

            <Button path={"images/right_arrow.svg"} text={"Next"} onClick={onLoginPress}/>
        </div>
    )
}

export default TypeEmail