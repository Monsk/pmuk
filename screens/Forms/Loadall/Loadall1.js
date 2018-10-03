import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class Loadall1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        accessAndEgress: {
          corrosion: false,
          wear: false,
          modification: false,
        },
        ...this.props.value
      }
    };
  }

  renderForm() {
    const typeOfExamination = t.enums({
      'firstUse': 'Before the equipment was used for the first time',
      '6mos': 'Within an interval of 6 months',
      '12mos': 'Within an interval of 12 months',
      'excepCircumstances': 'After the occurrence of exceptional circumstances',
      'examScheme': 'In accordance with an examination scheme',
    });



    return (
      t.struct({
        typeOfExamination,
        safetyConfirmation,
      })
    );
  }

  render() {
    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Examination completion</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="finalForm"
              type={this.renderForm()}
            />
          </View>
        </KeyboardAwareScrollView>
        <CardSection>
          <NavButtons
            onNext={() => this.props.onSubmit(this.state.value)}
            onBack={this.props.onBack}
          />
        </CardSection>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 20,
    fontWeight: 'bold'
  },
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


export default Loadall1;
