import { combineReducers } from 'redux';
import listReducer from './ListReducer';
import selectionReducer from './selectedReducer';
import fetchItemReducer from './fetchItemReducer';

export default combineReducers({
  data: listReducer,
  item: fetchItemReducer
});