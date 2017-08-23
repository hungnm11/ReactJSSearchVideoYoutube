import { combineReducers } from 'redux';
import listReducer from './ListReducer';
import selectionReducer from './selectedReducer';

export default combineReducers({
  data: listReducer,
  selectedItem: selectionReducer
});