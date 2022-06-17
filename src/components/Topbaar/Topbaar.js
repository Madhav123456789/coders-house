

function Topbaar() {
    const islogged=false;
    return (
        <div className="Navbaar top-0 bg-transparent w-[100vw] sm:w-[85vw] m-auto h-[6vh] flex items-center py-10 px-2">
            <div className="left w-[50%] px-3">
                <div className="logo flex items-center">
                    <img src="/nav_icon.svg" className="mr-1 sm:mr-2" alt="" />
                    <p className="font-nunito text-white text-[0.800rem] sm:text-xl whitespace-nowrap w-auto box-content sm:px-2">Coders House</p>
                </div>
            </div>
            <div className="right w-[50%] flex flex-row-reverse">
                {/* this is hamburger */}
                <div className={"hamburger m-3 sm:hidden cursor-pointer"+" "+!islogged&&"hidden"}>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                    <div className="ham-lines w-10 h-[0.3rem] my-2 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Topbaar