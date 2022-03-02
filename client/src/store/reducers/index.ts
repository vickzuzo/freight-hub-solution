import { combineReducers } from "redux";
import siteReducer from "./siteReducer";

const reducers = combineReducers({
  site: siteReducer,
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;