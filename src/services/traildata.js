import axios from 'axios';

const headers = {
  "X-Mashape-Key": "O2guePNmgxmshNbFjogYVv8qsKeZp15DiZqjsnyMiyDW4poyis",
  "Accept": "text/plain"
}

export const getData = function() {
  return axios.get('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=mountain+biking&q[city_cont]=Provo&q[state_cont]=Utah', headers)
  .then(res => {console.log(res.data); return res.data.places})
}
