import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import listReducer from './ListReducer';
import dataReducer from './dataReducer';
import selectionReducer from './selectedReducer';
import fetchItemReducer from './fetchItemReducer';

export default combineReducers({
  res: dataReducer,
  item: fetchItemReducer,
  form: formReducer
});