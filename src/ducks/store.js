import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './trail';
import userReducer from './user';


const reducer = combineReducers({
  trailReducer: dataReducer,
  userLoginReducer: userReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);
