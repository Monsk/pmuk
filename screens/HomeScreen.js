import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import firebase from 'firebase';

import ListItem from '../components/ListItem';


class HomeScreen extends Component {
  static navigationOptions = () => {
    return ({
      title: 'Home',
    });
  };

  render() {
    console.log(firebase.auth().currentUser.uid);

    const formTypes = [
      { type: 'ArticDumpTruckForm', title: 'Articulated Dump Truck' },
      { type: 'Loadall', title: 'Loadall' },
      { type: 'SelfErectingCrane', title: 'Self-erecting Crane' },
      { type: 'QuickHitch', title: 'Quick Hitch' },
    ];

    const listItems = formTypes.map((item, i) =>
      <ListItem
        key={i}
        title={item.title}
        onRowPress={() => this.props.navigation.navigate(item.type)}
      />
    );

    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.container}>
          <Text style={styles.h1}>Start a new report:</Text>
        </View>
        {listItems}
        <StatusBar
          barStyle="light-content"
        />
      </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    justifyContent: 'center',
    paddingTop: 40,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
