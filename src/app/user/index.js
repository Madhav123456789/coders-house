import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id : null,
  name:null,
  avtaar:null,
  followers:0,
  followings:0,
  email:null,
  mobile:null,
  description:null,
  categories:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state , action){
        // destructuring
        const {_id , name , avtaar , followers , followings , email , mobile , description , categories} = action.payload;

        // setting states
        state._id = _id;
        state.name = name||null;
        state.avtaar = avtaar||null;
        state.followers = followers||0;
        state.followings = followings||0;
        state.email = email||null;
        state.mobile = mobile||mobile;
        state.description = description||null;
        state.categories = categories||null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer