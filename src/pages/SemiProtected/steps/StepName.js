function StepName() {
    return (
        <>
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/act-name.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Enter Your Email</p>
            </div>

            {/* card content  */}
            <div className="input-box flex justify-start items-center h-10 rounded-md m-10
                mb-3 bg-input-box w-auto p-2">
                <input className="w-64 caret-white text-white text-base bg-transparent outline-none font-semibold font-nunito" placeholder="Your name" type="text" />
            </div>
            <span className="font-normal w-[57%] text-sm block mx-auto font-nunito text-[#C4C5C5] text-center">{'People use real names at codershouse :)'}</span>
        </>
    )
}

export default StepName