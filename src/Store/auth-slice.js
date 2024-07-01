import { createSlice } from "@reduxjs/toolkit";

const initialState={
    uid: "",
    token:"",
    isLogin:false,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.isLogin=true;
            state.token=action.payload.token;
            state.uid=action.payload.uid;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("uid", action.payload.uid);
            return state;
        },
        logout(state){
            state.isLogin=false;
            state.token="";
            state.uid="";
            localStorage.removeItem("token");
            localStorage.removeItem("uid");
            return state;
        }
    }
});
export const authSliceAction=authSlice.actions;
export default authSlice.reducer;