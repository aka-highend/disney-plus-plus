import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userid:"@0123456789",
    name:"Ashish",
    dob:"01-01-2000",
    mob:"0123456789",
    gender:"Male",

}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state=action.payload;
            return state;
        },
        adduserId:(state,action)=>{
            state.userid="@"+action.payload;
            return state;
        },
        addMob:(state,action)=>{
            state.mob=action.payload;
            state.userid="@"+action.payload;
        }
    }
});
export const userSliceAction=userSlice.actions;
export default userSlice.reducer;