import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class OverloadWarning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        overloadWarning: {
          overloadWarningFunctions: false,
          overloadWarningAudibleVisible: false,
          overloadWarningSwitchLegible: false,
        },
        ...this.props.value
      }
    };
  }

  renderOverloadWarningForm() {
    return (
      t.struct({
        overloadWarningFunctions: t.Boolean,
        overloadWarningAudibleVisible: t.Boolean,
        overloadWarningSwitchLegible: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      overloadWarningFunctions: {
        label: 'Overload warning functions correctly'
      },
      overloadWarningAudibleVisible: {
        label: 'Overload warning audible alarm and warning light operative'
      },
      overloadWarningSwitchLegible: {
        label: 'Overload warning switch markings legible'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Overload warning</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="overloadWarning"
              value={this.state.value.overloadWarning}
              type={this.renderOverloadWarningForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, overloadWarning: { ...obj } } }
              )}
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


export default OverloadWarning;
