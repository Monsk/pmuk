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

import {
  BasicInfoForm,
  BasicInfoForm2,
  AccessEgressFluids,
  CoversWindows,
  SeatBeltLightsHorn,
  VisibilityAidsSignsDecals,
  ControlLevers,
} from './LoadallFormIndex';
import { LOADALL } from '../formTypes';

import {
  customersFetch,
  setActiveForm,
  formSubmit
} from '../../../actions';

class LoadallForm extends Component {
  static navigationOptions = ({ navigation }) => {
    const exitAlert = () => {
      Alert.alert(
      'Quit Report?',
      'Are you sure you want to abandon this report?',
      [
        { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

    return {
      title: 'Loadall',
      headerLeft: null,
      headerRight: (
        <TouchableOpacity onPress={() => exitAlert()}>
          <Image
            source={require('../../../assets/clear.png')}
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
    this.onSuccess = this.onSuccess.bind(this);
    // this.goToNext = this.goToNext.bind(this);
  }

  componentWillMount() {
    this.props.customersFetch();
    this.props.setActiveForm({ formType: LOADALL });
  }

  onSubmit = (formData) => {
    this.setState(prevState => ({
      formData: { ...prevState.formData,
                  ...formData }
    }), this.goToNext);
  }

  onSuccess() {
    this.props.navigation.navigate('HomeScreen');
  }

  goToNext() {
    const { step } = this.state;
    if (step !== 16) {
      this.setState({ step: step + 1 });
      console.log(this.state);
    } else {
      this.props.formSubmit({
        formType: this.props.activeForm,
        formData: this.state.formData,
      }, this.onSuccess);
    }
  }

  goBack() {
    const { step } = this.state;
    if (step > 0) {
      this.setState({ step: step - 1 });
    }
  }


  render() {
    switch (this.state.step) {
      case 1:
        return (
          <View style={styles.form}>
            <BasicInfoForm
              value={this.state.formData}
              customers={this.props.customers}
              onSubmit={this.onSubmit}
            />
          </View>
        );
      case 2:
        return (
          <BasicInfoForm2
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 3:
        return (
          <AccessEgressFluids
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 4:
        return (
          <CoversWindows
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 5:
        return (
          <SeatBeltLightsHorn
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 6:
        return (
          <VisibilityAidsSignsDecals
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 7:
        return (
          <ControlLevers
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
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
  const { customerForm, form } = state;
  const { activeForm } = form;
  return { customers, customerForm, activeForm };
};


export default connect(mapStateToProps, {
  setActiveForm,
  customersFetch,
  formSubmit
})(LoadallForm);
