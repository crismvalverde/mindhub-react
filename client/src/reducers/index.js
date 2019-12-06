import { combineReducers } from 'redux';
import cityReducer from './cityReducer.js';
import itineraryReducer from './itineraryReducer';
import userReducer from './userReducer';

export default combineReducers({
  item: cityReducer,
  item2: itineraryReducer,
  item3: userReducer
});