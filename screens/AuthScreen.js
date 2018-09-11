import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

class AuthScreen extends Component {

  render() {
    return (
      <View style={styles.loginForm}>
        <View style={styles.title}>
          <Text style={styles.h1}>
            Plant Machinery UK
          </Text>
        </View>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AuthScreen;
