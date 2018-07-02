import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from '../components/LoginForm';

class AuthScreen extends Component {

  render() {
    return (
      <View style={styles.loginForm}>
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  loginForm: {
    flex: 1,
    justifyContent: 'center'
  }
};

export default AuthScreen;
