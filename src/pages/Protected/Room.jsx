// import {useLocation} from "react-router-dom";
import { useParams } from "react-router-dom";

function Room() {
  const param = useParams();

  console.log(param)
  return (
    <div>Room</div>
  )
}

export default Room