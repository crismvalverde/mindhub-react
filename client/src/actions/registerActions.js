import axios from 'axios';
import { POST_USER, ITEMS_LOADING } from './types';

export const postUser = (newUser) => dispatch => {
  dispatch(setItemsLoading())
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios
    .post("http://localhost:5000/users", newUser, config)
    .then(res =>
      dispatch({
        type: POST_USER,
        payload: res.data
      })
    ).catch(err => { console.log(err) })
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}