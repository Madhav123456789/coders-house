function Button({ text, path, reverse, color = "blue", onClick, Icon = false , icColor , classes}) {

  return (
    <div onClick={onClick} className={`button space-x-2 ${color === "blue" ? "bg-primary" : "bg-green-700 hover:bg-green-800"} ${reverse && "flex-row-reverse w-45 justify-around box-content px-2"} duration-200 h-19 w-44 m-auto mt-5 rounded-xl xl:rounded-2xl flex items-center justify-center cursor-pointer p-1 xl:text-xl ${classes}`}>
      <button className="text-md font-semibold text-white flex items-center">{text && text.substring(0, 20)}</button>
      {
        !Icon ?
          <img src={path} className='w-6 flex items-center' alt="" />
          :
          <Icon color={icColor?icColor:"white"} size={25}/>
       }
    </div>
  )
}

export default Button;