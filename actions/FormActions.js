import firebase from 'firebase';
import {
  FORM_SUBMIT,
  FORM_SUBMIT_FAIL,
 } from './types';

export const formSubmit = ({ formType, formData }) => {
  console.log({ formType });
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database()
      .ref(`/users/${currentUser.uid}/customers/${formData.customer}/forms`)
      .push({ formType, formData })
      .then(() => {
        dispatch({ type: FORM_SUBMIT });
      })
      .catch(() => formSubmitFail(dispatch));
  };
};

const formSubmitFail = (dispatch) => {
  dispatch({ type: FORM_SUBMIT_FAIL });
};
