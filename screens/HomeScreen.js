import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';

import ListItem from '../components/ListItem';
import { formTypes } from './Forms/formTypes';


class HomeScreen extends Component {
  static navigationOptions = () => {
    return ({
      title: 'Home',
    });
  };

  render() {
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
