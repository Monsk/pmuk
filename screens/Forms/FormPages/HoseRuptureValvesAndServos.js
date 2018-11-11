import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class HoseRuptureValvesAndServos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        hoseValves: {
          valvesFreeFromDamage: false,
          valvesCorrectlyInstalled: false,
          valvesFreeFromOilLeaks: false,
        },
        servos: {
          servosFreeFromOilLeaks: false,
          servosSecure: false,
          electricalConnectorsSecure: false,
        },
        ...this.props.value
      }
    };
  }

  renderHoseValvesForm() {
    return (
      t.struct({
        valvesFreeFromDamage: t.Boolean,
        valvesCorrectlyInstalled: t.Boolean,
        valvesFreeFromOilLeaks: t.Boolean,
      })
    );
  }

  renderServosForm() {
    return (
      t.struct({
        servosFreeFromOilLeaks: t.Boolean,
        servosSecure: t.Boolean,
        electricalConnectorsSecure: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      valvesFreeFromDamage: {
        label: 'Hose rupture valves free from damage'
      },
      valvesCorrectlyInstalled: {
        label: 'Hose rupture valves correctly installed'
      },
      valvesFreeFromOilLeaks: {
        label: 'Hose rupture vales free from oil leaks'
      },
      servosFreeFromOilLeaks: {
        label: 'All servos and valves free from oil leaks'
      },
      servosSecure: {
        label: 'All servos, valves and solenoids secure'
      },
      electricalConnectorsSecure: {
        label: 'All solenoid electrical connectors secure and free from visible corrosion'
      },
    }
  };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Hose rupture valves</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="hoseValves"
              value={this.state.value.hoseValves}
              type={this.renderHoseValvesForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, hoseValves: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Servos, valves and solenoids</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="servos"
              value={this.state.value.servos}
              type={this.renderServosForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, servos: { ...obj } } }
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


export default HoseRuptureValvesAndServos;
