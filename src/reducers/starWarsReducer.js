import {FETCH_DATA, SUCCESS_DATA, FAILURE_DATA} from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
        return {...state, fetching:true}

    case SUCCESS_DATA:
        return {...state, fetching:false, characters: action.payload }


    case FAILURE_DATA:
      return{...state, fetching:false}

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
