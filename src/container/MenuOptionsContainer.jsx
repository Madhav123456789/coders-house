import {FiLogOut} from "react-icons/fi";
import { openModal } from "../pages/Protected/Home";

function MenuOptionsContainer({ state , operation}) {
    return (
        <div className={`h-[89vh] ${state} flex-col pl-[0.30rem]`}>
            <div className="top flex flex-col justify-start h-[50%]">
                {/* Options */}
                <div className="h-10 text-lg text-white pl-4 flex items-center w-[90%] active:bg-primary rounded-full hover:bg-primary mb-1 font-nunito font-semibold">Profile</div>

                <div onClick={()=>{operation();openModal()}} className="h-10 text-lg text-white pl-4 flex items-center w-[90%] rounded-full hover:bg-primary mb-1 font-nunito font-semibold">Start a room</div>
            </div>
            <div className="bottom flex flex-col justify-end items-end w-[90%] h-[40%]">
                {/* Options */}
                <FiLogOut size={30} className={"bg-white text-black p-2 box-content rounded-lg hover:bg-primary hover:text-white"}/>
            </div>
        </div>
    )
}

export default MenuOptionsContainer