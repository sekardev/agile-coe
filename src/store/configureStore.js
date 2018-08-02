import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducer/index'
import initalState from './initalState';
const configureStore = ()=>{
    return createStore(reducers,initalState, applyMiddleware(thunk))
}

export default configureStore;