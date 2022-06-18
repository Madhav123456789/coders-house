import style from "./style.module.css";

function Loader({size , classes , width}) {

  return (
    <div style={size?{height:size+"px" , width:size+"px" , borderWidth:width+"px"}:{borderWidth:width+"px"}} className={style.loader+" "+classes}></div>
  )
}

export default Loader