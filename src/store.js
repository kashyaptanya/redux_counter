
import { configureStore } from "@reduxjs/toolkit";
import rootReducr from "./reducers";

const store = configureStore({
    reducer : rootReducr
})

export default store;