import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import  useReducer  from "./UserSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    }
})

export default store