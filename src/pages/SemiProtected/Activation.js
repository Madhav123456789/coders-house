import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import StepName from "./steps/StepName";
import StepAvatar from "./steps/StepAvatar";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

function Activation() {
    // loading state
    const [loading, setLoading] = useState(true);


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
                {/* card topbaar */}
                {/* <StepName/> */}
                <StepAvatar />
                <Button path={"images/right_arrow.svg"} text={"Next"} />
            </Card>
        </div>
    )
}

export default Activation