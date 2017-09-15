import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_ITEM, GET_KEYWORD, FETCH_DATA_SEARCH_SUCCESS } from './type';
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

export const getDataSearch = (data) => {
  return {
    type: FETCH_DATA_SEARCH_SUCCESS,
    payload: data
  }
};

export const fetchData = (q, nextPageToken) => {
  return (dispatch) => {
    // dispatch(getData())
    axios.get(ROOT_URL, {
      params: {
        q: q,
        maxResults: 20,
        part: "snippet",
        key: API_KEY,
        pageToken: nextPageToken
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

export const searchVideo = (keyword) => {
  return (dispatch) => {
    dispatch(getData())
    axios.get(ROOT_URL, {
      params : {
        q: keyword,
        maxResults: 20,
        part: "snippet",
        key: API_KEY,
      }
    })
    .then((response) => {
      dispatch(getDataSearch(response));
    })
    .catch((error) => {
      dispatch(getDataFailure(error));
    });
  };
};
