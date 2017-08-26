export const fetchItem = (item) => {
  return {
    type: 'fetch_item',
    payload: item
  }
};