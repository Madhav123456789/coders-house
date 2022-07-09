import Card from "../../components/Card/Card";
import StepName from "./steps/StepName";
import StepAvatar from "./steps/StepAvatar";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

// object for dynamic components
const Steps = {
    0 : StepName,
    1 : StepAvatar
};

function Activation() {
    // loading state
    const [loading, setLoading] = useState(false);

    // state for holding step state
    const [step , setStep] = useState(0);

    // dynamic component
    const Component = Steps[step];


    // returning loading
    if (loading) {
        return (
            <div className="my-10">
                <Card>
                    <Loader size={"40"} width={4} classes={"mx-auto"} />
                    <div className="text-white font-nunito mt-3 font-semibold">Activation in progress...</div>
                </Card>
            </div>
        )
    }
    return (
        <div className='activation-page h-[84vh]  flex  justify-center items-center'>
            <Card auto>
                <Component setLoading={setLoading} setStep={setStep}/>
            </Card>
        </div>
    )
}

export default Activation