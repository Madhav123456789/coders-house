import api from "./user-api";

// apis

// create room
export const needCreateRoom = async(data)=>api.post("/room/create" , data);
// get all open rooms or targeted room
export const needGetRoomOrRooms = async(query , data)=>api.get("/room/rooms"+query , data);
// get user rooms
export const needUserRooms = async(data , query)=>api.get("/room/me/"+query , data);
// update room
export const needUpdateRoom = async(data , roomId)=>api.post("/room/update/"+roomId , data);