import * as featuredData from '../services/featuredTrails';
const GET_TRAILS = 'GET_TRAILS';
const GET_TRAILS_PENDING = 'GET_TRAILS_PENDING';
const GET_TRAILS_FULFILLED = 'GET_TRAILS_FULFILLED';
const initialState = {
    featuredTrails: [],
    loading: false
}
export default function featuredReducer(state = initialState, action) {
  switch(action.type) {
    case GET_TRAILS_PENDING:
      return Object.assign({}, state, {loading: true})
    case GET_TRAILS_FULFILLED:
      return Object.assign({}, state, {loading: false, featuredTrails: action.payload})
    default:
      return state
  }
}
export function getFeaturedTrails() {
  return {
    type: GET_TRAILS,
    payload: featuredData.getFeaturedTrails()
  }
}