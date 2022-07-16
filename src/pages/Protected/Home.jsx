import Button from "../../components/Button/Button";
import "./Home.css";
import { TiGroup } from "react-icons/ti";
import RoomsContainer from "../../container/RoomsContainer";
import Modal from "./Modal/Modal";
import { useState } from "react";

// global functions
let openModal;
function Home() {
    const [isModal , setIsModal] = useState("hidden");

    // function for open modal
    openModal = ()=>{
        // hidding scroll bar
        document.querySelector("*").style.overflow = "hidden";
        // opening modal
        setIsModal("flex");
    };

    return (
    <>
        <div className="home-page w-full  flex flex-col items-center border-t-[1px] border-[#ffffff1c]">
            <div className="home-top h-16 w-full lg:mt-3 flex items-center justify-center">
                <div className="w-[90%]  lg:w-[40%] flex items-center h-full">
                    {/* tab */}
                    <div className="home-tab relative text-white font-nunito font-semibold text-lg h-full lg:flex items-center mr-3 hidden">
                        All voice rooms
                    </div>

                    {/* search box */}
                    <div className="bg-input-box flex items-center justify-between w-[50vw] lg:w-60 px-2 lg:ml-2 rounded-full h-8">
                        <img src="/images/search.svg" alt="" />
                        <input className="bg-transparent caret-white text-white outline-none font-nunito font-semibold box-border w-[87%]" type="text" />
                    </div>
                </div>
                <div className="w-[40%] hidden lg:flex items-center justify-end">
                    <Button onClick={openModal} classes={"margin-none"} Icon={TiGroup} text={"Start a Room"} reverse color="green" />
                </div>
            </div>

            <RoomsContainer openModal={openModal}/>
            <Modal state={isModal} setState={setIsModal}/>
        </div>
    </>
    )
}

export default Home;

export {openModal};