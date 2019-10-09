import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import {shopInitialState} from './reducers/index'
export const initStore = (initialState = shopInitialState) => {
    return createStore(reducer,initialState, applyMiddleware(thunk));
  };