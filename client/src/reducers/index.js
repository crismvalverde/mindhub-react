import { combineReducers } from 'redux';
import cityReducer from './cityReducer.js';
import itineraryReducer from './itineraryReducer';

export default combineReducers({
  item: cityReducer,
  item2: itineraryReducer
});