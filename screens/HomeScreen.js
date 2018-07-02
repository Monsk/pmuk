import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = (props) => {
    return ({
      title: 'Home',
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image
            source={require('../assets/menu.png')}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  };

  render() {
    console.log(firebase.auth().currentUser);
    return (
      <View>
        <Text>Start a new report:</Text>
        <Button
          onPress={() => this.props.navigation.navigate('ArticDumpTruckForm')}
          title="Articulated Dump Truck"
        />
        <Button
          onPress={() => alert('Start a report')}
          title="Loadall"
        />
        <Button
          onPress={() => alert('Start a report')}
          title="Self-erecting Crane"
        />
        <Button
          onPress={() => alert('Start a report')}
          title="Quick Hitch"
        />
      </View>
  );
}
}

export default HomeScreen;
