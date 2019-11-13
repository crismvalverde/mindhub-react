import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
  cities: []
}

export default function(state = initialState, action) {
  console.log(action);
  console.log(state);
  
  
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        cities: action.payload,
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