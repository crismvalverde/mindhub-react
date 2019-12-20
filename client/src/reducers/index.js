import { combineReducers } from 'redux';
import cityReducer from './cityReducer.js';
import itineraryReducer from './itineraryReducer';
import userReducer from './userReducer';
import registerReducer from './registerReducer.js';
import loginReducer from './loginReducer.js';

export default combineReducers({
  item: cityReducer,
  item2: itineraryReducer,
  item3: userReducer,
  item4: registerReducer,
  item5: loginReducer
});