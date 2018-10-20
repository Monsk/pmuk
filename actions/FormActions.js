import firebase from 'firebase';
import {
  FORM_SUBMIT,
  FORM_SUBMIT_FAIL,
  SET_ACTIVE_FORM,
 } from './types';

export const setActiveForm = ({ formType }) => {
  return {
    type: SET_ACTIVE_FORM,
    payload: formType,
  };
};

export const formSubmit = ({ formType, formData }, onSuccess) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database()
      .ref(`/users/${currentUser.uid}/customers/${formData.customer}/forms`)
      .push({ formType, formData, createdAt: Date.now() })
      .then(() => {
        dispatch({ type: FORM_SUBMIT });
        if (typeof (onSuccess) === 'function') {
          onSuccess();
        }
      })
      .catch(() => formSubmitFail(dispatch));
  };
};

const formSubmitFail = (dispatch) => {
  dispatch({ type: FORM_SUBMIT_FAIL });
};
