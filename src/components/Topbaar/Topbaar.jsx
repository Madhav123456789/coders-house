import { useState } from "react";
import MenuOptionsContainer from "../../container/MenuOptionsContainer";
import {useSelector} from "react-redux";

function Topbaar() {
    const {isAuth} = useSelector(s=>s.auth);
    // this state to manage option container state
    const [optCont , setOptCont] = useState("hidden");
    // this state to manage local menu options
    const [options , setOptions] = useState("hidden");

    // this function will be used to open the menu
    const openMenu = () => {
        setOptions("visible");
        setOptCont("flex");
        // hidding scroll bar
        document.querySelector("*").style.overflow = "hidden";
        // fincding container
        const cont = document.getElementById("menu-cont");
        // finding menu
        const menu = document.getElementById("menu");

        // setting cont width
        cont.style.width = "100vw";
        // setting menu width
        menu.style.width = "60vw";
    };

    // this function will be used to close the menu
    const closeMenu = () => {
        setOptions("hidden");
        setOptCont("hidden");
        // hidding scroll bar
        document.querySelector("*").style.overflow = "auto";
        // setting body overflow
        document.body.style.overflowX = "hidden";
        // setting html overflow
        document.querySelector("html").style.overflowX = "hidden";
        // fincding container
        const cont = document.getElementById("menu-cont");
        // finding menu
        const menu = document.getElementById("menu");

        // decreasing menu width
        menu.style.width = "0px";
        // decreasing the cont width
        cont.style.width = "0px";
    };
    return (
        <div className="overflow-hidden Navbaar top-0 bg-transparent w-[100vw] sm:w-[85vw] m-auto h-[6vh] flex items-center py-10 px-2">
            <div className="left w-[50%] px-3">
                <div className="logo flex items-center">
                    <img src="/nav_icon.svg" className="mr-1 sm:mr-2" alt="" />
                    <p className="font-nunito text-white text-[0.800rem] text-base sm:text-xl whitespace-nowrap w-auto box-content sm:px-2">Coders House</p>
                </div>
            </div>
            <div className="right w-[50%] flex flex-row-reverse">
                {/* this is hamburger */}
                <div onClick={openMenu} className={`hamburger m-3 lg:hidden cursor-pointer ${isAuth ? "block" : "hidden"}`}>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                </div>

                {/* menu screen */}
                <div id="menu-cont" onClick={closeMenu} className="lg:hidden w-[0px] h-[100vh] fixed flex justify-end bg-[#0000005f] z-10">
                    <div onClick={(e) => { e.stopPropagation() }} id="menu" className="menu lg:hidden h-[100vh] w-[0vw] top-0 fixed bg-box-color transition-all duration-300 z-20 flex flex-col justify-end">
                        {/* profile */}
                        <div className="border-[#0077FF] w-fit rounded-full border-2 p-1 absolute top-2 left-3">
                            <img className="object-cover h-10" src="/images/act-avtaar-monkey.svg" alt="" />
                        </div>
                        {/* closing menu btn */}
                        <img onClick={closeMenu} className={`absolute top-4 right-6 h-7 ${options}`} src="images/cross.svg" alt="" />

                        {/* Options */}
                        <MenuOptionsContainer operation={closeMenu} state={optCont}/>
                    </div>
                </div>

                {/* this is Profile */}
                <div className={`Profile m-3 cursor-pointer justify-center items-center space-x-2 ${isAuth ? "hidden lg:flex" : " hidden"}`}>
                    <div className="text-white">Rakesh k</div>
                    <div className="border-[#0077FF] rounded-full border-2 p-1">
                        <img className="object-cover" src="/images/act-avtaar-monkey.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbaar