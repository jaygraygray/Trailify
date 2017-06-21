import axios from 'axios';

const API_KEY = {
  "X-Mashape-Key": "O2guePNmgxmshNbFjogYVv8qsKeZp15DiZqjsnyMiyDW4poyis",
  "Accept": "text/html"
}

export const getTrailData = function(city, state) {
  return axios.get(`https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=mountain+biking&q[city_cont]=${city}&q[state_cont]=${state}`, {
    headers: API_KEY
  })
  .then(res => {console.log(res.data.places); return res.data.places})
}
