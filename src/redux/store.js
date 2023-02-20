import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import catalogReducer from "./reducers/catalog-reducer";
import goodsReducer from "./reducers/goods-reducer";
import messageReducer from "./reducers/message-reducer";
import popupReducer from "./reducers/popup-reducer";
import searchReducer from "./reducers/search-reducer";

let reducers = combineReducers({ goodsReducer, popupReducer, catalogReducer, messageReducer, searchReducer });

/*
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
window.store = store;