import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class CoversWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        covers: {
          beltGuards: false,
          machineGuards: false,
        },
        windows: {
          windscreen: false,
          cabWindows: false,
        },
        ...this.props.value
      }
    };
  }

  renderCoversForm() {
    return (
      t.struct({
        beltGuards: t.Boolean,
        machineGuards: t.Boolean,
      })
    );
  }

  renderWindowsForm() {
    return (
      t.struct({
        windscreen: t.Boolean,
        cabWindows: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      beltGuards: {
        label: 'Fan and drive belt guards in position, secure and free from damage'
      },
      machineGuards: {
        label: 'All machine panels and guards in position, secure and free from damage'
      },
      windscreen: {
        label: 'Windscreen free from cracks or scratches which obscure operator’s field of view'
      },
      cabWindows: {
        label: 'Other cab windows free from damage'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Covers & Guards</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="covers"
              value={this.state.value.covers}
              type={this.renderCoversForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, covers: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Windscreen & Cab Windows</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="windows"
              value={this.state.value.windows}
              type={this.renderWindowsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, windows: { ...obj } } }
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


export default CoversWindows;
