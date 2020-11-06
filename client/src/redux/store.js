import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import notesReducer from "./notesReducer";


let reducers = combineReducers({
    notesReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store;