import {combineReducers} from "redux"
import counterSlice from "./updown";

const rootReducr =combineReducers({
    counter : counterSlice
})
export default rootReducr;







