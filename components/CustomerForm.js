import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { customerUpdate } from '../actions';
import { CardSection, Input } from './common';

class CustomerForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Big crane corp."
            value={this.props.name}
            onChangeText={value => this.props.customerUpdate({ prop: 'name', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.currentCustomer;

  return { name };
};


export default connect(mapStateToProps, { customerUpdate })(CustomerForm);
