import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { customerFetch } from '../actions/CustomerActions';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress = () => {
    const { uid, name } = this.props.customer;
    this.props.customerFetch({ uid });
    this.props.navigation.push('Customer', { uid, name });
  }

  render() {
    const { name } = this.props.customer;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


export default connect(null, { customerFetch })(withNavigation(ListItem));
