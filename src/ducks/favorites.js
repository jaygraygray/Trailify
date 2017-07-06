import * as favorites from '../services/favorites';

const GET_FAVORITES = 'GET_FAVORITES';
const GET_FAVORITES_PENDING = 'GET_FAVORITES_PENDING';
const GET_FAVORITES_FULFILLED = 'GET_FAVORITES_FULFILLED';


const initialState = {
  favoriteTrails: [],
  loading: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_FAVORITES_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_FAVORITES_FULFILLED:
      return Object.assign({}, state, {loading: false, favoriteTrails: action.payload})


    default:
      return state
  }
}

export function getFavoriteTrails(user_id) {
  return {
    type: GET_FAVORITES,
    payload: favorites.getFavoriteTrails(user_id)
  }
}
