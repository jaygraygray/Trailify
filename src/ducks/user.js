import * as userlogin from '../services/user';

const GET_DATA = 'GET_DATA';
const GET_DATA_PENDING = 'GET_DATA_PENDING';
const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED';

const initialState = {
  userData: [],
  loading: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_DATA_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_DATA_FULFILLED:
      return Object.assign({}, state, {loading: false, userData: action.payload})

    default:
      return state
  }
}

export function getUserInfo()) {
  return {
    type: GET_DATA,
    payload: userlogin.getUserInfo()
  }
}
