import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import crudReducer from "./crudReducer";

const rootReducers = combineReducers({
    counter : counterReducers,
    crud : crudReducer

})

export default rootReducers;