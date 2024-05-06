import { createStore } from "redux";
import rootReducer from "./reduceres";

const store = createStore(rootReducer)

export default store;