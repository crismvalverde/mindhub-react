import axios from 'axios';
import { GET_ITINERARIES_BY_CITY, ITEMS_LOADING } from './types';

export const getItinerariesByCity = (city) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('http://localhost:5000/itineraries/' + city)
    .then(res => res.json())
    .then(data =>{
      console.log("res");
      console.log(data);
       
      dispatch({
        type: GET_ITINERARIES_BY_CITY,
        payload: data
      })})
    .catch(e => console.log(e))
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}