import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class CustomerScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.push('CustomerEdit')}>
          <Image
            source={require('../assets/edit.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    };
  }

  componentDidMount() {
    this.updateTitle();
  }

  checkForUpdate() {
    if (this.props.navigation.state.params.title !== this.props.currentCustomer.name) {
      this.updateTitle();
    }
  }

  updateTitle = () => {
    const { name } = this.props.currentCustomer;
    const { setParams } = this.props.navigation;
    setParams({ title: name });
  }

  render() {
    this.checkForUpdate();
    return (
      <View>
        <Text>Report 1</Text>
        <Text>Report 2</Text>
        <Text>Report 3</Text>
        <Text>Report 4</Text>
        <Text>Report 5</Text>
      </View>
   );
 }
}

const mapStateToProps = (state) => {
  const { currentCustomer } = state;
  return { currentCustomer };
};

export default connect(mapStateToProps)(CustomerScreen);
