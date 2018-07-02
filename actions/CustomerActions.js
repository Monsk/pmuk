import firebase from 'firebase';
import {
  CUSTOMER_UPDATE,
  CUSTOMER_CREATE,
  CUSTOMER_FETCH_SUCCESS,
  CUSTOMER_SAVE_SUCCESS,
  CLEAR_CUSTOMER,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_DELETED
} from './types';

export const customerUpdate = ({ prop, value }) => {
  return {
    type: CUSTOMER_UPDATE,
    payload: { prop, value }
  };
};

export const customerCreate = ({ name }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers`)
      .push({ name })
      .then(() => {
        dispatch({ type: CUSTOMER_CREATE });
      })
      .catch(() => customerCreateFail(dispatch));
  };
};

const customerCreateFail = (dispatch) => {
  dispatch({ type: CUSTOMER_CREATE_FAIL });
};

export const customerFetch = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers/${uid}`)
      .on('value', snapshot => {
        const customerDetails = snapshot.val();
        dispatch({ type: CUSTOMER_FETCH_SUCCESS, payload: { uid, ...customerDetails } });
      });
  };
};

export const customerSave = ({ name, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers/${uid}`)
      .set({ name })
      .then(() => {
        dispatch({ type: CUSTOMER_SAVE_SUCCESS });
      });
  };
};

export const customerDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: CUSTOMER_DELETED });
      });
  };
};

export const customerClear = () => {
  return { type: CLEAR_CUSTOMER };
};
