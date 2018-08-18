import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import ListItem from '../components/ListItem';


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
