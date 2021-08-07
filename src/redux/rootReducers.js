import { combineReducers } from "redux";
// import productReducers from "./reducers/productReducers";
import productReducer from "../components/InfoImg/module/reducer/productReducer";

const rootReducers = combineReducers({
    // productReducers,
    productReducer,
})
export default rootReducers;