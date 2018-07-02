import { FORM_UPDATE } from './types';

export const formUpdate = ({ formName, value }) => {
  return {
    type: FORM_UPDATE,
    payload: { formName, value }
  };
};
