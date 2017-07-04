import axios from 'axios';

export const addToFavorites = function(user_id, unique_id, name, city, state, length, rating) {
  return axios.post('/api/favorited', {
    user_id, unique_id, name, city, state, length, rating
  })
  .then(res => {console.log('POST FAVORITE TRAIL:', res.data); return res.data})
}

export const getFavoriteTrails = function(user_id) {
  return axios.get(`/api/favorited/${user_id}`, {
  })
  .then(res => {console.log('GET FAVORITE TRAILS:', res.data); return res.data})
}
