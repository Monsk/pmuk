import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../components/common';
import { NavButtons } from '../../components/NavButtons';


const Form = t.form.Form;

class BasicInfoForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onFormSubmit() {
    // Provides form vaidation
    const { onSubmit } = this.props;
    const value = this.refs.BasicInfoForm2.getValue();
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
              ref="BasicInfoForm2"
              value={this.state.value}
              type={this.renderForm()}
              onChange={value => this.setState({ value })}
            />
          </View>
        </KeyboardAwareScrollView>
        <CardSection>
          <NavButtons
            onNext={this.onFormSubmit.bind(this)}
            onBack={this.props.onBack}
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
