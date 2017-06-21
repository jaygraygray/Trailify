import axios from 'axios';
import TrailSearch from '../containers/trail-search';

const API_KEY = {
  "X-Mashape-Key": "O2guePNmgxmshNbFjogYVv8qsKeZp15DiZqjsnyMiyDW4poyis"
}

export const getTrailData = function(city) {
  return axios.get(`https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=mountain+biking&q[city_cont]=${city}&q[state_cont]=Utah`, {
    headers: API_KEY
  })
  .then(res => {console.log(res.data.places); return res.data.places})
}
