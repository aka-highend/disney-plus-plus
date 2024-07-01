import { configureStore } from "@reduxjs/toolkit";
import DetailsReducer from "./details-slice";
import authSlice from "./auth-slice";
import userSlice from "./user-slice";
import wishlistSlice from "./wishlist-slice";

const store = configureStore({
  reducer: {
    details: DetailsReducer,
    auth: authSlice,
    user: userSlice,
    wishlist: wishlistSlice,
  },
});
export default store;
