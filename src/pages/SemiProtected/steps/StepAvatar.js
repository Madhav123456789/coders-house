import React from 'react'

function StepAvatar() {
    return (
        <>
            <div className="title flex items-center whitespace-nowrap  justify-center space-x-2">
                <img src="images/act-avtaar-monkey.svg" alt="" />
                <p className='font-semibold text-white font-nunito'>Okay, Rakesh k!</p>
            </div>

            <div className="how text-center text-sm font-nunito mt-2 font-normal text-[#C4C5C5]">
                How's this photo
            </div>

            {/* card content  */}
            <label htmlFor="avtaar-select" className="border-[#0077FF] flex justify-center items-center cursor-pointer bg-transparent border-4 w-28 m-auto rounded-full my-3">
                <img src="images/avtaar.svg" className='w-28 object-cover select-none' alt="" />

                <input id='avtaar-select' className="hidden" placeholder="Your name" type="file" accept='image/*' />
            </label>
            <span className="font-normal w-[57%] text-sm block mx-auto font-nunito text-[#C4C5C5] text-center">{'People use real names at codershouse :)'}</span>
        </>
    )
}

export default StepAvatar