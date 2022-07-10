// import {useLocation} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useWebRtc } from "../../addons/hooks/useWebRtc";
import { useSelector } from "react-redux";

function Room() {
  const { roomId } = useParams();
  // getting user from the store
  const user = useSelector(s=>s.user);
  // using custom hook
  const [cleints , provideRef] = useWebRtc(roomId , user);
  return (
    <div>
      {
        cleints.map((cleint , index) =>{
          return <div key={index}>
                    <audio ref={(instance)=>{provideRef(instance , cleint._id)}} controls autoPlay></audio>
                    <div className="text-white">{cleint.name}</div>
                 </div>
        })
      }
    </div>
  )
}

export default Room