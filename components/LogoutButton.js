import React, { Component } from 'react';
import { Button } from 'react-native';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

class LogoutButton extends Component {

  logoutPress = () => {
    firebase.auth().signOut()
    .then(this.props.navigation.navigate({ routeName: 'Auth' }))
    .catch(console.log('unable to sign out'));
  }

  render() {
    return (
      <Button
        title="Logout"
        onPress={this.logoutPress}
        color='#000'
      />
    );
  }
}

export default withNavigation(LogoutButton);
