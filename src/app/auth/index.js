import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // those state will be used to protect routes
  isAuth : false,
  activated : false,
  // this state is used to identify the source of registration
  type : "email",
  // those state will filled up during registration process
  user : {
    name : null,
    hash : null,
    // this state is only for sending with verification api
    data : null
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authOk(state){
      state.isAuth = true;
    },

    authDestroy(state){
      state.isAuth = false;
    },

    activate(state , action){
      if(action.payload !== null){
        state.activated = action.payload;
      }else{
        state.activated = true;
      }
    },

    deactivate(state){
      state.activated = false;
    },

    setUser(state , action){
      // destructuring user
      const {name , avtaar , hash , data} = action.payload;
      state.user.name = name||null;
      state.user.hash = hash||null;
      state.user.data = data||null;
    },

    setType(state , action){
      // setting value with validation
      if(action.payload === "mobile" || action.payload === "email"){
        state.type = action.payload;
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const { authOk , authDestroy , activate , deactivate , setUser , setType } = authSlice.actions

export default authSlice.reducer