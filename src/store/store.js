import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
    news: [],
    isFetching: false
}


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
