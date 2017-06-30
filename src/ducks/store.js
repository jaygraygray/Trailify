import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './trail';
import userReducer from './user';
import featuredReducer from './featured'


const reducer = combineReducers({
  trailReducer: dataReducer,
  userLoginReducer: userReducer,
  featuredReducer: featuredReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);
