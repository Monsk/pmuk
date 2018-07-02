import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import BasicInfoForm from './BasicInfoForm';
import BasicInfoForm2 from './BasicInfoForm2';

import { customersFetch, formUpdate } from '../../actions';

class ArticDumpTruckForm extends Component {
  static navigationOptions = ({ navigation }) => {
    const exitAlert = () => {
      Alert.alert(
      'Quit Report?',
      'Are you sure you want to abandon this report?',
      [
        { text: 'OK', onPress: () => navigation.push('HomeScreen') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

    return {
      title: 'Artic. Dump Truck',
      headerLeft: null,
      headerRight: (
        <TouchableOpacity onPress={() => exitAlert()}>
          <Image
            source={require('../../assets/clear.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
      )
    };
  }

  constructor() {
    super();
    this.state = {
      step: 1
    };
    this.goToNext = this.goToNext.bind(this);
  }

  componentWillMount() {
    this.props.customersFetch();
  }

  onSubmit = (formData) => {
    this.setState(prevState => ({
      formData: { ...prevState.formData,
                  ...formData }
    }));
    this.goToNext();
  }

  goToNext() {
    const { step } = this.state;
    if (step !== 6) {
      this.setState({ step: step + 1 });
      console.log(this.state);
    } else {
      alert('Submitting');
      // BUT
      // how to access all the fields from here?
    }
  }


  render() {
    switch (this.state.step) {
      case 1:
        return (
          <View style={styles.form}>
            <BasicInfoForm
              customers={this.props.customers}
              onSubmit={this.onSubmit}
              singleNav
            />
          </View>
        );
      case 2:
        return <BasicInfoForm2 onSubmit={this.onSubmit} />;
      case 3:
        return <BasicInfoForm2 onSubmit={this.onSubmit} />;
      case 4:
        return <BasicInfoForm2 onSubmit={this.onSubmit} />;
      default:
        console.log('default page');
      }
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

const mapStateToProps = (state) => {
  const customers = _.mapValues(state.customerList, (val) => {
     return val.name;
  });
  const { customerForm } = state;
  return { customers, customerForm };
};


export default connect(mapStateToProps, { customersFetch, formUpdate })(ArticDumpTruckForm);
