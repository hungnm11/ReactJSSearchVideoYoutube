import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_ITEM, GET_KEYWORD, FETCH_DATA_SUCCESS_TEST } from '../actions/type';

const INITIALSTATE = {
  data: [],
  isFetching: false,
  error: false,
  nextPageToken: false
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    // case FETCHING_DATA:
    //   return {
    //     ...state,
    //     data: [],
    //     isFetching: true
    //   };
    case FETCH_DATA_SUCCESS:
      let myArr = []
      state.data.push(...action.payload.items)
      myArr = state.data
      return {
        ...state,
        data: myArr,
        isFetching: false,
        nextPageToken: action.payload.nextPageToken
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