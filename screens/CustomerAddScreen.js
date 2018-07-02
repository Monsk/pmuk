import React, { Component } from 'react';
import { connect } from 'react-redux';
import { customerCreate, customerClear } from '../actions';
import { Card, CardSection, Button } from '../components/common';
import CustomerForm from '../components/CustomerForm';

class CustomerAddForm extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Customer'
    };
  }

  componentWillMount() {
    this.props.customerClear();
  }

  onButtonPress() {
    const { name } = this.props;
    this.props.customerCreate({ name });
    this.props.navigation.navigate({ routeName: 'CustomerList' });
  }

  render() {
    return (
      <Card>
        <CustomerForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} >
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.customerForm;

  return { name };
};

export default connect(mapStateToProps,
  { customerClear,
    customerCreate
  })(CustomerAddForm);
