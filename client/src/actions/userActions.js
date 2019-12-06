import axios from 'axios';
import { POST_USER } from './types';

// export const getItinerariesByCity = (city) => dispatch => {
//   dispatch(setItemsLoading());
//   axios
//     .get('http://localhost:5000/itineraries/' + city)
//     .then(res =>
//       dispatch({
//         type: POST_USER,
//         payload: res.data
//       })
//     )
// };

export const postUser = (data) => {
  return {
    type: POST_USER,
    payload: data
  }
}