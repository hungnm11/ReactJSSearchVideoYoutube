export const selectedItem = (itemId) => {
  return {
    type: 'selected_item',
    payload: itemId
  }
};