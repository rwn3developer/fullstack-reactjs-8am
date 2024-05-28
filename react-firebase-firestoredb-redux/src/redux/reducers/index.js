import { combineReducers } from "redux";
import crudreducer from "./crudReducer";

const rootReducer = combineReducers({
    crud : crudreducer
})

export default rootReducer;