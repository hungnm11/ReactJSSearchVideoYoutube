import axios from 'axios';

const API_KEY = 'AIzaSyAAFuih1jjBDqIM9rXj8V30brfavcXH5zM';
const ROOT_URL = 'https://content.googleapis.com/youtube/v3/search';

export const fetchItem = (item) => {
  return {
    type: 'fetch_item',
    payload: item
  }
};