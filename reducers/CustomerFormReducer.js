import {
  CUSTOMER_UPDATE,
  CUSTOMER_CREATE,
  // CUSTOMERS_FETCH_SUCCESS,
  CUSTOMER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
      // ^ [] = key interpolation (ES6)
    case CUSTOMER_CREATE:
      return INITIAL_STATE;
    // case CUSTOMERS_FETCH_SUCCESS:
    //   return state;
    case CUSTOMER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
