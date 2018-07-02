import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CUSTOMERS_FETCH_SUCCESS
} from './types';


export const customersFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/customers`)
      .on('value', snapshot => {
        dispatch({ type: CUSTOMERS_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};
