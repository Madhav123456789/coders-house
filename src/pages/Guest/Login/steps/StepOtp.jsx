import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState , useCallback , useEffect } from "react";
import { needVerify } from "../../../../api/user-api";
import {useSelector , useDispatch} from "react-redux";
import {authOk} from "../../../../app/auth";

function StepOtp() {
  const dispatch = useDispatch();
  // getting data for otp verification from auth store
  const {data , hash} = useSelector(s=>s.auth.user);

  // states
  const [otp , setOtp] = useState("");
  const [disable , setDisable] = useState(true);

  // handlers
  const otpHandler=(e)=>{
      setOtp(e.target.value.substring(0 , 4));
  };

  // this function will validate the states and return false if validate success
  const validater = useCallback(() => {
    if (!Number.isInteger(Number(otp))) {
    return true;
    }else {
    return false;
    }
  },[otp]);

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

  // Otp onClick
  const onPressToVerify=async()=>{
    if(disable) return toast.error("Please enter a valid otp");

    // api request
    try {
      const {data:response} = await needVerify({hash , otp , data});

      // logic
      if(response.flag){
          // dispatching
          dispatch(authOk());
          // show message
          toast.success(response.msg);
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
    <Card>
      {/* card topbaar */}
      <div className="title flex items-start justify-center space-x-2">
        <img src="images/otp-moji.svg" alt="" />
        <p className='font-semibold text-white font-nunito w-44 text-center'>Enter the code we just texted you</p>
      </div>

      {/* card content  */}
      <div className="input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
        <input value={otp} onChange={otpHandler} maxLength={6} className="w-[171px] text-center caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="8888" type="number" />
      </div>
      <span className="text-sm block mx-auto font-semibold font-nunito text-[#C4C5C5] text-center">Didn't receive? Tap to resend</span>

      <Button path={"images/right_arrow.svg"} text={"Next"} onClick={onPressToVerify}/>
    </Card>
  )
}

export default StepOtp