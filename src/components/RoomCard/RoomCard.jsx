import {MdPeople} from "react-icons/md";
//35

function RoomCard({room}) {
    return (
        <div className='overflow-hidden h-40 lg:h-44 bg-box-color px-4 w-72 lg:w-64 flex-col m-3 rounded-xl p-3 box-content'>
            <h1 className='mx-auto w-fit font-semibold text-white font-nunito'>Artificial Intelligence is danger for future</h1>

            <div className='overflow-hidden room-owner-detail w-[100%] h-[6.5rem] flex'>
                <div className='left w-[40%] h-[100%] flex items-center'>
                    <div className='imagesWrapper h-[70%] w-[80%] relative ml-1 mt-1'>
                        <div className="border-[#0077FF] absolute rounded-[100%] border-2 flex items-center justify-center">
                            <img className="cursor-pointer object-cover h-11 w-10" src="/images/act-avtaar-monkey.svg" alt="" />
                        </div>
                        <div className="border-green-600 left-[20px] top-[22px] absolute rounded-[100%] border-2 flex items-center justify-center">
                            <img className="cursor-pointer object-cover h-11 w-10" src="/images/act-avtaar-monkey.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='right w-[60%] h-[100%] flex flex-col justify-center lg:justify-start lg:mt-5 pl-3'>
                    <div className="name flex space-x-2 items-center">
                        <p className='text-white font-extralight text-sm font-nunito'>Virat Kohli</p>
                        <img src="images/msg-icon.svg" className='w-3 h-3' alt="" />
                    </div>
                    <div className="name flex space-x-2 items-center">
                        <p className='text-white font-extralight text-sm font-nunito'>Anushka Sharma</p>
                        <img src="images/msg-icon.svg" className='w-3 h-3' alt="" />
                    </div>
                </div>
            </div>

            <div className='room-detail flex justify-end items-center space-x-1'>
                <p className="counts text-white">12</p>
                <MdPeople color="white" size={"20"}/>
            </div>
        </div>
    )
}

export default RoomCard