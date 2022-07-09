import { useState , useEffect } from 'react'
import { needGetRoomOrRooms } from '../api/rooms-api';
import RoomCard from '../components/RoomCard/RoomCard'

function RoomsHolder() {
  const [rooms , setRooms] = useState([]);

  // finding open rooms
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await needGetRoomOrRooms("?limit=100&page=1");
        console.log(data)
        // adding to the rooms array
        if(data.flag){
          setRooms(data.rooms);
        }
      } catch (error) {
        if(error.response.data){
          console.log("Error In RoomCont: "+error.response.data.msg);
        }
      }
    })();
  } , []);

  return (
    <div className="m-auto pb-6 w-[100%] flex items-center justify-center lg:justify-evenly flex-col md:flex-row lg:w-[80%] h-auto flex-wrap">
        {
          // showing rooms
          rooms.map((room , index)=>{
            return <RoomCard room={room} key={index} />
          })
        }
    </div>
  )
}

export default RoomsHolder