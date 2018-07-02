import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CustomerFormReducer from './CustomerFormReducer';
import CustomerListReducer from './CustomerListReducer';
import CustomerReducer from './CustomerReducer';
import FormReducer from './FormReducer';

export default combineReducers({
  auth: AuthReducer,
  customerForm: CustomerFormReducer,
  customerList: CustomerListReducer,
  currentCustomer: CustomerReducer,
  form: FormReducer
});
