function Topbaar() {
    const islogged = true;

    // this function will be used to open the menu
    const openMenu = () => {
        // setting app overflow hidden
        document.querySelector(".app").style.overflow = "hidden";
        document.head.style.overflowY = "hidden"
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
        // setting app overflow auto
        document.querySelector(".app").style.overflowY = "auto";
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
                <div onClick={openMenu} className={"hamburger m-3 lg:hidden cursor-pointer" + `${islogged ? " block" : "hidden"}`}>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                </div>

                {/* menu screen */}
                <div id="menu-cont" onClick={closeMenu}  className="lg:hidden w-[100vw] h-[100vh] fixed flex justify-end bg-[#0000005f] z-10">
                    <div onClick={(e)=>{e.stopPropagation()}} id="menu" className="menu lg:hidden h-[100vh] w-[0vw] top-0 fixed bg-box-color transition-all duration-300 z-20">
                        {/* closing menu btn */}
                        <img onClick={closeMenu} className="absolute top-4 right-6 h-7" src="images/cross.svg" alt="" />
                    </div>
                </div>

                {/* this is Profile */}
                <div className={"Profile m-3 cursor-pointer justify-center items-center space-x-2" + `${islogged ? " hidden lg:flex" : "hidden"}`}>
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