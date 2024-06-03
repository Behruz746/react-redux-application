import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../redusers/cauntSlice";

export default configureStore({
  reducer: countReducer,
  devTools: process.env.NODE_ENV !== "production", // redux dev tool uchun
});
