import {
  FORM_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  formName: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      console.log({ ...state, [action.payload.formName]: action.payload.value });
      return { ...state, [action.payload.formName]: action.payload.value };
      // ^ [] = key interpolation (ES6)
    default:
      return state;
  }
};
