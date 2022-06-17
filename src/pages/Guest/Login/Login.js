import { useState } from "react";
import StepEmail from "./steps/StepEmail";
import StepPhone from "./steps/StepPhone";

// holding steps in object
const Steps = {
    0: StepEmail,
    1: StepPhone
};

function Login() {
    const [step , setStep] = useState(0);

    // this is dynamic step component
    const Component = Steps[step];

    // this function will be used to change the steps
    const changeStep = (flag) => {
        if(flag === "email"){
            setStep(0);
        }else{
            setStep(1);
        }
    };

    
    return (
        <div className='pb-10 login-page h-[84vh]  flex  justify-center flex-col items-center'>
            <div className="space-x-2 choose-singup w-28 xl:w-[45vw] h-auto my-3 flex mx-auto justify-end items-center py-2">
                <div onClick={()=>changeStep("email")} className={`boxes h-14 w-14 rounded-md flex items-center justify-center cursor-pointer ${step===0?"bg-primary":"bg-box-color"}`}>
                    <img src="images/opt-email.svg" className="w-9" alt="" />
                </div>

                <div onClick={()=>changeStep("phone")} className={`boxes h-14 rounded-md w-14 flex items-center justify-center cursor-pointer ${step===1?"bg-primary":"bg-box-color"}`}>
                    <img src="images/opt-phone.svg" className="h-10" alt="" />
                </div>
            </div>

            {/* Using step here */}
            <Component/>
        </div>
    )
}

export default Login