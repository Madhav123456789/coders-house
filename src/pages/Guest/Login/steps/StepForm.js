import TypeEmail from "../types/TypeEmail";
import TypePhone from "../types/TypePhone";
import Card from "../../../../components/Card/Card";
import { useState } from "react";

// holding types in object
const Types = {
    0: TypeEmail,
    1: TypePhone
};

function StepForm() {
    const [type, setType] = useState(0);

    // this function will be used to change the steps
    const changeStep = (flag) => {
        if (flag === "email") {
            setType(0);
        } else {
            setType(1);
        }
    };

    // this is dynamic step component
    const Component = Types[type];
    return (
        <>
            <div className="space-x-2 choose-singup w-28 xl:w-[45vw] h-auto my-3 flex mx-auto justify-end items-center py-2">
                <div onClick={() => changeStep("email")} className={`boxes h-14 w-14 rounded-md flex items-center justify-center cursor-pointer ${type === 0 ? "bg-primary" : "bg-box-color"}`}>
                    <img src="images/opt-email.svg" className="w-9" alt="" />
                </div>

                <div onClick={() => changeStep("phone")} className={`boxes h-14 rounded-md w-14 flex items-center justify-center cursor-pointer ${type === 1 ? "bg-primary" : "bg-box-color"}`}>
                    <img src="images/opt-phone.svg" className="h-10" alt="" />
                </div>
            </div>

            <Card>
                {/* Using step here */}
                <Component />
            </Card>

        </>
    )
}

export default StepForm