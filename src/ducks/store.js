import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './trail';


const reducer = combineReducers({
  trailReducer: dataReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);
