export default (state = null, action) => {
  switch(action.type) {
    case 'fetch_item':
      return action.payload;
    default:
      return state;
  }
};