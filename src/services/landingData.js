import axios from 'axios';

// API call with city, state, and activity passed in as variables

const API_KEY = {
  "X-Mashape-Key": "O2guePNmgxmshNbFjogYVv8qsKeZp15DiZqjsnyMiyDW4poyis",
  "Accept": "text/html"
}

export const getLandingData = function(lat, lon) {
  return axios.get(`https://trailapi-trailapi.p.mashape.com/?lat=${lat}.1&limit=2&lon=${lon}&radius=25`, {
    headers: API_KEY
  })
  .then(res => {console.log(res.data.places); return res.data.places})
}