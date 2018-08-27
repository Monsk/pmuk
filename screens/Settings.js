import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LogoutButton from '../components/LogoutButton';

// TODO: Pull name from user

class Settings extends Component {
  static navigationOptions = () => {
    return ({
      title: 'Settings',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Simon Hunter</Text>
        <View style={styles.item}>
          <LogoutButton />
        </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: '#ffffff',
  },
  item: {
    marginTop: 40,
  }
});

export default Settings;
