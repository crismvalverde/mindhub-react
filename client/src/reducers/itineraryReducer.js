import { GET_ITINERARIES_BY_CITY, ITEMS_LOADING } from '../actions/types';

const initialState = {
  itineraries: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITINERARIES_BY_CITY:
      return {
        ...state,
        itineraries: action.payload,
        loading: true
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