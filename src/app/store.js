import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import postReducer from "../slices/postSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        auth: authReducer
    }
});