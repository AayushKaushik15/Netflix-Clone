import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducers from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore (
    {
        reducer : {
            user : userReducer,
            movies : moviesReducers,
            gpt : gptReducer,
        },
    }
)


export default appStore;