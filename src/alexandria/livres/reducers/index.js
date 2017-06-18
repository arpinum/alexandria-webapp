import {combineReducers} from 'redux';
import parId from './parIdReducer';
import status from './statusReducer';

export default combineReducers({
  parId,
  status,
});
