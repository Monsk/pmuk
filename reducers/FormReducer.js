import {
  FORM_SUBMIT,
  FORM_SUBMIT_FAIL,
  SET_ACTIVE_FORM,
} from '../actions/types';

const INITIAL_STATE = {
  activeForm: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_FORM:
      return { ...state, activeForm: action.payload };
    case FORM_SUBMIT:
      return INITIAL_STATE;
    case FORM_SUBMIT_FAIL:
      return { ...state, error: 'Failed to create customer' };
    default:
      return state;
  }
};
