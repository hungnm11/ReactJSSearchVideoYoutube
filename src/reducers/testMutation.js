import { FETCH_DATA_SUCCESS } from '../actions/type';
const INITSTATE = {
  data: [],
  isFetching: false,
  error: false,
  nextPageToken: false
}

export default (state = INITSTATE, action) => {
  switch(action.type) {
    case FETCH_DATA_SUCCESS:
      // myArr.push(...action.payload.items);
      // console.log('IMMUTATION', myArr)
      let myArr = []
      state.data.push(...action.payload.items)
      myArr = state.data
      return {
        ...state,
        data: myArr,
        isFetching: false,
        nextPageToken: action.payload.nextPageToken
      };
    default:
      return state;
  }
};