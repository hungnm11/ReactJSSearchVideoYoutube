export default (state = null, action) => {
  switch(action.type) {
    case 'selected_item':
      return action.payload;
    default:
      return state;
  }
};