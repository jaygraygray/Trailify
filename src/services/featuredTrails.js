import axios from 'axios';
export const getFeaturedTrails = function() {
  return axios.get(`/api/featured_trails`, {
  })
  .then(res => {console.log(res.data); return res.data})
}