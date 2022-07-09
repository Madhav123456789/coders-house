import {MdPeople} from "react-icons/md";
import {useNavigate} from "react-router-dom";
//35

function RoomCard({room}) {
    const navigate = useNavigate();
    const {_id , title , speakers , owner , category , all_members} = room;

    // Open Profile OnClick
    const onPressProfile=(e , target)=>{
        e.stopPropagation();
        navigate("/profile/"+speakers[target-1]._id);
    };

    return (
        <div onClick={()=>{navigate("/room/"+_id)}} className='cursor-pointer overflow-hidden h-40 lg:h-44 bg-box-color px-4 w-72 lg:w-64 flex-col m-3 rounded-xl p-3 box-content'>
            <h1 className='mx-auto w-fit h-[48px] font-semibold text-white font-nunito'>{title}</h1>

            <div className='overflow-hidden room-owner-detail w-[100%] h-[6.5rem] flex'>
                <div className='left w-[40%] h-[100%] flex items-center'>
                    <div className='imagesWrapper h-[70%] w-[80%] relative ml-1 mt-1'>
                        {speakers[0]&&<div onClick={(e)=>{onPressProfile(e , "1")}} className="border-[#0077FF] absolute rounded-[50%] border-2 flex items-center justify-center">
                            <img className="cursor-pointer object-cover rounded-[50%] h-11 w-11" src={"http://localhost:9999"+speakers[0].avtaar||"/images/act-avtaar-monkey.svg"} alt="" />
                        </div>}
                        {speakers[1]&&<div onClick={(e)=>{onPressProfile(e , "2")}} className="border-green-600 left-[20px] top-[22px] absolute rounded-[50%] border-2 flex items-center justify-center">
                            <img className="cursor-pointer object-cover rounded-[50%] h-11 w-11" src={"http://localhost:9999"+speakers[1].avtaar||"/images/act-avtaar-monkey.svg"} alt="" />
                        </div>}
                    </div>
                </div>
                <div className='right w-[60%] h-[100%] flex flex-col justify-center lg:justify-start lg:mt-5 pl-3'>
                    {speakers[0]&&<div className="name flex space-x-2 items-center">
                        <p className='text-white font-extralight text-sm font-nunito'>{speakers[0].name}</p>
                        <img src="images/msg-icon.svg" className='w-3 h-3' alt="" />
                    </div>}
                    {speakers[1]&&<div className="name flex space-x-2 items-center">
                        <p className='text-white font-extralight text-sm font-nunito'>{speakers[1].name}</p>
                        <img src="images/msg-icon.svg" className='w-3 h-3' alt="" />
                    </div>}
                </div>
            </div>

            <div className='room-detail flex justify-end items-center space-x-1'>
                <p className="counts text-white">{all_members.length}</p>
                <MdPeople color="white" size={"20"}/>
            </div>
        </div>
    )
}

export default RoomCard