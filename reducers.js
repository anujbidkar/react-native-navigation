// reducer.js
import {UPDATE_USER_INFORMATION} from './actions';

// Initial state
const initialState = {
  userInformation: {
    products: [],
  },
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFORMATION:
      return {
        ...state,
        userInformation: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
