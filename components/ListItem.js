import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { customerFetch } from '../actions/CustomerActions';
import { CardSection } from './common';

class ListItem extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.title}
            </Text>
          </CardSection>
        </View>
      </TouchableOpacity>

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
