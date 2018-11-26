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
  Steering,
  Brakes,
  Skip,
  ArticJointChassis,
  Axles,
  HydraulicCylinders,
  HydraulicHosesPipes,
  HoseRuptureValvesAndServos,
  SuspensionTyresAndWheels,
  AssessmentConclusion,
} from './ArticDumpTruckFormIndex';
import { ARTIC_DUMP_TRUCK } from '../formTypes';

import {
  customersFetch,
  formSubmit,
  setActiveForm
 } from '../../../actions';

class ArticDumpTruckForm extends Component {
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
      title: 'Artic. Dump Truck',
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
    this.props.setActiveForm({ formType: ARTIC_DUMP_TRUCK });
  }

  onSubmit = (formData) => {
    this.setState(prevState => ({
      formData: { ...prevState.formData,
                  ...formData }
    }), this.goToNext);
  }

  onSuccess() {
    Alert.alert(
    'Form saved',
    'Your form has been saved successfully.',
    [
      { text: 'OK', onPress: () => this.props.navigation.navigate('HomeScreen') },
    ]
  );
  }

  goToNext() {
    const { step } = this.state;
    if (step < 17) {
      this.setState({ step: step + 1 });
      console.log(this.state);
      console.log(this.props.activeForm);
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
      case 8:
        return (
          <Steering
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 9:
        return (
          <Brakes
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 10:
        return (
          <Skip
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 11:
        return (
          <ArticJointChassis
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 12:
        return (
          <Axles
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 13:
        return (
          <HydraulicCylinders
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 14:
        return (
          <HydraulicHosesPipes
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 15:
        return (
          <HoseRuptureValvesAndServos
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 16:
        return (
          <SuspensionTyresAndWheels
            value={this.state.formData}
            onSubmit={this.onSubmit}
            onBack={this.goBack.bind(this)}
          />
        );
      case 17:
        return (
          <AssessmentConclusion
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


export default connect(mapStateToProps, { customersFetch, formSubmit, setActiveForm })(ArticDumpTruckForm);
