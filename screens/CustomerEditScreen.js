import _ from 'lodash';
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { customerUpdate, customerSave, customerDelete } from '../actions';
import { Card, CardSection, Button } from '../components/common';
import CustomerForm from '../components/CustomerForm';

class CustomerEditForm extends Component {
  static navigationOptions = ({ navigation } = this.props) => {
    const params = navigation.state.params || {};

    return {
      title: 'Edit Customer',
      headerRight: (
        <TouchableOpacity onPress={params.customerDelete}>
          <Image
            source={require('../assets/delete.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    };
  }

  componentWillMount() {
    _.each(this.props.currentCustomer, (value, prop) => {
      this.props.customerUpdate({ prop, value });
    });
  }

  componentDidMount() {
    this.props.navigation.setParams({ customerDelete: this.onDeletePress });
  }

  onSavePress() {
    const { name, uid } = this.props.customerForm;
    this.props.customerSave(
      { name, uid },
      this.props.navigation.navigate('Customer', { uid, name })
    );
  }

  onDeletePress = () => {
    const { uid } = this.props;
    this.props.customerDelete({ uid });
    this.props.navigation.navigate({ routeName: 'CustomerList' });
  }

  updateTitle = () => {
    const { name } = this.props.currentCustomer;
    const { setParams } = this.props.navigation;
    setParams({ title: name });
  }

  render() {
    return (
      <Card>
        <CustomerForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSavePress.bind(this)} >
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentCustomer, customerForm } = state;
  return { currentCustomer, customerForm };
};

export default connect(mapStateToProps,
  { customerUpdate,
    customerSave,
    customerDelete
  })(CustomerEditForm);
