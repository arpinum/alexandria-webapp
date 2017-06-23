import {combineReducers} from 'redux';
import livres from './livres/reducers';
import volumes from './volumes/reducers';
import exemplaires from './exemplaires/reducers';

export default combineReducers({
  livres,
  volumes,
  exemplaires
});
