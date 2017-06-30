import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './trail';
import weatherReducer from './weather';


const reducer = combineReducers({
  trailReducer: dataReducer,
  weatherReducer: weatherReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);
