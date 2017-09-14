
import update from 'immutability-helper';
import { FETCH_DATA_SUCCESS } from '../actions/type';
const INITSTATE = {
  data: []
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
        data: myArr,
      };
    default:
      return state;
  }
};