import { GET_ITEMS, ITEMS_LOADING } from '../actions/types';

const initialState = {
  itineraries: []
}

export default function(state = initialState, action) {
  console.log(action);
  console.log(state);
  
  
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        itineraries: action.payload,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}