import { createSlice } from "@reduxjs/toolkit";

const initialState={
    list: [],
    length:0,
    isEmpty:true,
    isItemExist:false,
}
const wishlistSlice=createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addToWishlist(state,action){
            state.list.push(action.payload);
            state.isEmpty=false;
            state.length++;
            return state;
        },
        addAllToWishlist(state,action){
            state.list=action.payload;
            state.length+=action.payload.length;
            state.isEmpty=false;
            return state;
        },
        removeFromWishlist(state,action){
            state.list=state.list.filter(item=>item.id !== action.payload);
            state.length--;
            if(state.list.length===0)state.isEmpty=true;
            return state;
        },
        deleteWishlist(state){
            state.list=[];
            state.isEmpty=true;
            state.length=0;
            return state;
        },
        isItemExist(state,action){
            console.log(action.payload);
            const isFound=state.list.find(item=>item.id===action.payload);
            state.isItemExist=isFound ? true:false;
            return state;

        }
    }
});
export const wishlistSliceAction=wishlistSlice.actions;
export default wishlistSlice.reducer;