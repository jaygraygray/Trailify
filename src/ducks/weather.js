import * as weatherimport from '../services/weatherdata';

const GET_WEATHER = 'GET_WEATHER';
const GET_WEATHER_PENDING = 'GET_WEATHER_PENDING';
const GET_WEATHER_FULFILLED = 'GET_WEATHER_FULFILLED';

const initialState = {
  weather: [],
  loading: false
}

export default function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case GET_WEATHER_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_WEATHER_FULFILLED:
      return Object.assign({}, state, {loading: false, weatherData: action.payload})

    default:
      return state
  }
}

export function getWeatherData(city) {
  return {
    type: GET_WEATHER,
    payload: weatherimport.getWeatherData(city)
  }
}
