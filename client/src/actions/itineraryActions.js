import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from './types';

export const getItems = (name) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('http://localhost:5000/itineraries/' + name)
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      }))
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}