import axios from 'axios';
import { LOGIN, LOGOUT, ITEMS_LOADING } from '../actions/types';
const jwtDecode = require('jwt-decode');

export const googleLogin = () => dispatch => {
  const token = localStorage.getItem('token')
  const user = jwtDecode(token)

  dispatch({
    type: LOGIN,
    payload: user
  })
}

export const login = (user) => dispatch => {
  axios.post("http://localhost:5000/users/login", user)
    .then(res => {
      const token = res.data.token
      localStorage.setItem('token', `${token}`)
      const decodeUser = jwtDecode(token)

      dispatch({
        type: LOGIN,
        payload: decodeUser
      })
    }).catch(err => { console.log(err) })
}

export const logout = () => dispatch => {
  localStorage.clear()
  const user = null

  dispatch({
    type: LOGOUT,
    payload: user
  })
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}