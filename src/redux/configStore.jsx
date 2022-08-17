import { createStore, combineReducers } from "redux";
import { commentReducer } from "./reducer/commentReducer";
import { imgCarReducer } from "./reducer/imgCarReducer";
import { numberReducer } from "./reducer/numberReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  number: numberReducer,
  imgCar: imgCarReducer,
  commentReducer: commentReducer,

});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
