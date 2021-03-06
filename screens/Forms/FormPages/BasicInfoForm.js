import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';

const Form = t.form.Form;

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  onFormSubmit() {
    // Provides form validation
    const { onSubmit } = this.props;
    const value = this.refs.BasicInfoForm.getValue();
    if (value) {
      onSubmit(this.state.value);
    }
  }

  renderForm() {
    const { customers } = this.props;

    return t.struct({
      competent_person: t.String,
      customer: t.enums(customers),
    });
  }


  render() {
    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Form
              ref="BasicInfoForm"
              value={this.state.value}
              type={this.renderForm()}
              onChange={value => this.setState({ value })}
            />
          </View>
        </KeyboardAwareScrollView>
        <CardSection>
          <NavButtons
            singleNav
            onNext={this.onFormSubmit.bind(this)}
            navigation={this.props.navigation}
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


export default BasicInfoForm;
