import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { customerFetch } from '../actions/CustomerActions';
import { CardSection } from './common';

class ListItem extends Component {

  renderSubtitle() {
    if (this.props.subtitle) {
      return (
        <Text style={styles.subtitleStyle}>
          {this.props.subtitle}
        </Text>
      );
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onRowPress}>
        <View>
          <CardSection>
            <View>
              <Text style={styles.titleStyle}>
                {this.props.title}
              </Text>
              {this.renderSubtitle()}
            </View>
          </CardSection>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  subtitleStyle: {
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 15,
    color: '#606368',
  },
};


export default connect(null, { customerFetch })(withNavigation(ListItem));
