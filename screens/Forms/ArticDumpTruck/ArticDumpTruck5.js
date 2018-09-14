import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        controlLevers: {
          decalsLegible: false,
          leversFunction: false,
          noUncontrolledMovement: false,
          switchesFunction: false,
          manualAvailable: false,
        },
        ...this.props.value
      }
    };
  }

  renderControlLeversForm() {
    return (
      t.struct({
        decalsLegible: t.Boolean,
        leversFunction: t.Boolean,
        noUncontrolledMovement: t.Boolean,
        switchesFunction: t.Boolean,
        manualAvailable: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      decalsLegible: {
        label: 'All control lever decals legible'
      },
      leversFunction: {
        label: 'All control levers not excessively loose or tight and function correctly'
      },
      noUncontrolledMovement: {
        label: 'Machine free from uncontrolled movement of implements, etc.'
      },
      switchesFunction: {
        label: 'All switches in place, legible and function correctly'
      },
      manualAvailable: {
        label: 'Operator’s instruction manual available'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Control levers</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="controlLevers"
              value={this.state.value.controlLevers}
              type={this.renderControlLeversForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, controlLevers: { ...obj } } }
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


export default ArticDumpTruck5;
