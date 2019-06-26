import axios from 'axios';
import { get } from 'http';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCH_DATA = 'FETCH DATA';
export const SUCCESS_DATA = 'SUCCESS_DATA';
export const FAILURE_DATA = 'FAILURE_DATA';

export const fetchData = () => {
  dispatch({ type: FETCH_DATA });
  return dispatch => {
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        dispatch({ type: SUCCESS_DATA, payload: res.data });
      })
      .catch(dispatch({ type: FAILURE_DATA }));
  };
};

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
