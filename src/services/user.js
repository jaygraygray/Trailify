import axios from 'axios';

export const getUserInfo = function() {
  return axios.get('/me')
  .then(res => {console.log(res.data); return res.data})
}
