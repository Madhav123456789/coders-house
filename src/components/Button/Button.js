

function Button({text , path , width="11rem"}) {
  return (
    <div className={`button space-x-2 bg-primary h-19 w-44 m-auto mt-5 rounded-xl xl:rounded-2xl flex items-center justify-center cursor-pointer p-1 xl:text-xl`}>
        <button className="text-md font-semibold text-white flex items-center">{text&& text.substring(0 , 20)}</button>
        <img src={path} className='w-6 flex items-center' alt="" />
    </div>
  )
}

export default Button;