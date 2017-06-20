import {combineReducers} from 'redux';
import livres from './livres/reducers';
import volumes from './volumes/reducers';

export default combineReducers({
  livres,
  volumes
});
