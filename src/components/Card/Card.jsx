

function Card({ children , auto}) {
    return (
        <div style={{ background: '1D1D1D' }} className={`card bg-box-color h-auto xs:h-[50vh] mb-10 w-[90vw] sm:w-[50vw] px-5 py-10 sm:p-10 sm:box-content lg:p-30 xl:box-border xl:px-5 xl:py-10 xl:w-[45vw]  flex items-center justify-center flex-col mx-auto rounded-lg ${!auto?"xl:h-[65vh]":"xl:h-auto"}`}>
            <div className="h-auto">
                {children}
            </div>
        </div>
    )
}

export default Card