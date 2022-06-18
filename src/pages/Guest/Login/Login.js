import { useState } from "react";
import StepForm from "./steps/StepForm";
import StepOtp from "./steps/StepOtp";

// holding steps in object
const Steps = {
    0: StepForm,
    1: StepOtp
};

function Login() {
    const [step , setStep] = useState(0);

    // this is dynamic step component
    const Component = Steps[step];

    

    
    return (
        <div className='pb-10 login-page h-[84vh]  flex  justify-center flex-col items-center'>
            <Component/>
        </div>
    )
}

export default Login