import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../components/common';
import { NavButtons } from '../../components/NavButtons';


const Form = t.form.Form;

class BasicInfoForm2 extends Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  onFormSubmit() {
    const { onSubmit } = this.props;
    const value = this.refs.form.getValue();
    if (value) {
      onSubmit(this.state.value);
    }
  }

  renderForm() {
    return (
      t.struct({
        workshop_no: t.String,
        serial_no: t.String,
        year_of_manufacture: t.Number,
        location: t.String
      })
    );
  }

  render() {
    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Form
              ref="form"
              value={this.state.value}
              type={this.renderForm()}
              onChange={value => this.setState({ value })}
            />
          </View>
        </KeyboardAwareScrollView>
        <CardSection>
          <NavButtons
            onNext={this.onFormSubmit.bind(this)}
            onBack={this.printState}
          />
        </CardSection>
      </View>

    );
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


export default BasicInfoForm2;
