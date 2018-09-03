import {
  FORM_SUBMIT,
  FORM_SUBMIT_FAIL,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_SUBMIT:
      return INITIAL_STATE;
    case FORM_SUBMIT_FAIL:
      return { ...state, error: 'Failed to create customer' };
    default:
      return state;
  }
};
