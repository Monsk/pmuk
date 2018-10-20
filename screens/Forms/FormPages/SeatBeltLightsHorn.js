import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class SeatBeltLightsHorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        seatAndBelt: {
          restraintBelt: false,
          seatBolts: false,
          beltAnchors: false,
          seatSuspension: false,
        },
        lightsAndHorn: {
          lights: false,
          horn: false,
        },
        ...this.props.value
      }
    };
  }

  renderOperatorSeatAndBeltForm() {
    return (
      t.struct({
        restraintBelt: t.Boolean,
        seatBolts: t.Boolean,
        beltAnchors: t.Boolean,
        seatSuspension: t.Boolean,
      })
    );
  }

  renderLightsAndHornForm() {
    return (
      t.struct({
        lights: t.Boolean,
        horn: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      restraintBelt: {
        label: 'Operators restraint belt free from defects or damage'
      },
      seatBolts: {
        label: 'Seat mounting bolts in place and secure'
      },
      beltAnchors: {
        label: 'Operators restraint belt anchors secure'
      },
      seatSuspension: {
        label: 'Operator’s seat suspension mechanism free from defects or damage'
      },
      lights: {
        label: 'All lights [brake lights, headlights, etc.] free from damage and function correctly'
      },
      horn: {
        label: 'Horn functions correctly'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Operator’s seat and restraint belt</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="seatAndBelt"
              value={this.state.value.seatAndBelt}
              type={this.renderOperatorSeatAndBeltForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, seatAndBelt: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Lights, beacon, horn</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="lightsAndHorn"
              value={this.state.value.lightsAndHorn}
              type={this.renderLightsAndHornForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, lightsAndHorn: { ...obj } } }
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


export default SeatBeltLightsHorn;
