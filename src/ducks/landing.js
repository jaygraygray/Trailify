import * as dataimport from '../services/landingData';

const GET_LANDING = 'GET_LANDING';
const GET_LANDING_PENDING = 'GET_LANDING_PENDING';
const GET_LANDING_FULFILLED = 'GET_LANDING_FULFILLED';

const initialState = {
  landingData: [],
  loading: false
}

export default function landingReducer(state = initialState, action) {
  switch(action.type) {
    case GET_LANDING_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_LANDING_FULFILLED:
    console.log(action.payload)
      return Object.assign({}, state, {loading: false, landingData: action.payload})

    default:
      return state
  }
}

export function getLandingData(lat, lon) {
  return {
    type: GET_LANDING,
    payload: dataimport.getLandingData(lat, lon)
  }
}
