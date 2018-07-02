import {
  CUSTOMER_FETCH_SUCCESS,
  CLEAR_CUSTOMER,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_DELETED
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  uid: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOMER_FETCH_SUCCESS:
      return action.payload;
    case CLEAR_CUSTOMER:
      return { ...state, ...INITIAL_STATE };
    case CUSTOMER_CREATE_FAIL:
      return { ...state, error: 'Failed to create customer' };
    case CUSTOMER_DELETED:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
