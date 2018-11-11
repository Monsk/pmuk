import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class SuperstructureAndChassis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        superstructureAndChassis: {
          freeFromCracks: false,
          freeFromDamage: false,
          freeFromNonApprovedRepair: false,
          counterweightBoltsInPosition: false,
        },
        ...this.props.value
      }
    };
  }

  renderSuperstructureAndChassisForm() {
    return (
      t.struct({
        freeFromCracks: t.Boolean,
        freeFromDamage: t.Boolean,
        freeFromNonApprovedRepair: t.Boolean,
        counterweightBoltsInPosition: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      freeFromCracks: {
        label: 'Superstructure and chassis free from cracks'
      },
      freeFromDamage: {
        label: 'Superstructure and chassis free from damage and excessive corrosion'
      },
      freeFromNonApprovedRepair: {
        label: 'Superstructure and chassis free from any non-approved repair or modification'
      },
      counterweightBoltsInPosition: {
        label: 'Counterweight bolts in position and secure'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Superstructure and chassis</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="superstructureAndChassis"
              value={this.state.value.superstructureAndChassis}
              type={this.renderSuperstructureAndChassisForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, superstructureAndChassis: { ...obj } } }
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


export default SuperstructureAndChassis;
