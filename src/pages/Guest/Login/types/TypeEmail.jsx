import Button from "../../../../components/Button/Button"


function TypeEmail({setStep}) {
    return (
        <>
            {/* card topbaar */}
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/email-head.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Enter Your Email</p>
            </div>

            {/* card content  */}
            <div className="overflow-hidden input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
                <img className="w-9 mr-2" src="images/email-inp.svg" alt="" />
                <input className="caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="Example@email.com" type="email" />
            </div>
            <span className="text-sm block mx-auto font-semibold font-nunito text-[#C4C5C5] text-center">Login via Email</span>

            <Button path={"images/right_arrow.svg"} text={"Next"} onClick={()=>{setStep(1)}}/>
        </>
    )
}

export default TypeEmail