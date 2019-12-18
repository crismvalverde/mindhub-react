import { POST_USER, ITEMS_LOADING } from '../actions/types';

const initialState = {
  user: {},
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return {
        ...state
      }
  }
}