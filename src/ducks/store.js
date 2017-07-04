import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './trail';
import weatherReducer from './weather';
import userReducer from './user';
import featuredReducer from './featured';
import landingReducer from './landing';


const reducer = combineReducers({
  trailReducer: dataReducer,
  weatherReducer: weatherReducer,
  userLoginReducer: userReducer,
  featuredReducer: featuredReducer,
  landingReducer: landingReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);
