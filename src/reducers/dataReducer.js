import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_ITEM, GET_KEYWORD } from '../actions/type';

const INITIALSTATE = {
  data: [],
  isFetching: false,
  error: false
};

export default (state = INITIALSTATE, action) => {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};