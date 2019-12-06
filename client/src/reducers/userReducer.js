import { POST_USER, ITEMS_LOADING } from '../actions/types';

const initialState = {
  user: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POST_USER:
      return {
        ...state,
        users: action.payload,
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