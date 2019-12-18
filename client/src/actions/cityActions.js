import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from './types';

export const getCities = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('http://localhost:5000/cities/all')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    ).catch(err => { console.log(err) })
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}