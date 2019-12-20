import { LOGIN, LOGOUT, ITEMS_LOADING } from '../actions/types';

const initialState = {
  user: {
    'id': localStorage.getItem('id') || '',
    'email': localStorage.getItem('email') || ''
  },
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('id', action.payload.id)
      localStorage.setItem('email', action.payload.email)
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    case LOGOUT:
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