import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_ITEM, GET_KEYWORD } from './type';
import axios from 'axios';

const API_KEY = 'AIzaSyAAFuih1jjBDqIM9rXj8V30brfavcXH5zM';
const ROOT_URL = 'https://content.googleapis.com/youtube/v3/search';

export const fetchItem = (item) => {
  return {
    type: 'FETCH_ITEM',
    payload: item
  }
};

export const getData = () => {
  return {
    type: FETCHING_DATA
  };
};

export const getDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data.data
  };
};

export const getDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

export const getKeyword = (keyword) => {
  return {
    type: GET_KEYWORD,
    payload: keyword
  };
};

export const fetchData = (q) => {
  const url = `${ROOT_URL}/?q=${q}`;
  console.log(url)
  return (dispatch) => {
    dispatch(getData())
    axios.get(url, {
      params: {
        maxResults: 20,
        part: "snippet",
        key: API_KEY,
        // pageToken: nextPageToken
      }
    })
    .then((response) => {
      dispatch(getDataSuccess(response));
    })
    .catch((error) => {
      dispatch(getDataFailure(error));
    });
  };
};