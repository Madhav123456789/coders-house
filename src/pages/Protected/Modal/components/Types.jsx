import React from 'react'

function Types({active=false , value , text ,src , onClick}) {
  return (
    <div onClick={()=>{onClick(value)}} className={`${active?"bg-input-box":""} hover:bg-input-box cursor-pointer rounded-md h-full w-[31%] flex items-center justify-center flex-col`}>
        <img className='h-10' src={"/images/"+src} alt="" />
        <div className='font-light font-nunito text-sm text-white'>
            {text.substring(0,8)}
        </div>
    </div>
  )
}

export default Types