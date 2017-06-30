import axios from 'axios';


const WEATHER_API_KEY = '69262e39593eff85169e9e25263bf673';

export function getWeatherData(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}&q=${city},us&units=imperial`)
    .then(response => {console.log(response.data); return response.data;
  })
}
