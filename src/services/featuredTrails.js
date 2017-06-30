import axios from 'axios';
export const getFeaturedTrails = function() {
  return axios.get(`/api/featured_trails`, {
  })
  .then(res => {return res.data})
}