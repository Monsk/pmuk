import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticJointChassis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        articJoint: {
          noExcessiveFreeplay: false,
          jointFixingsSecure: false,
          adequatelyLubricated: false,
          damageToJoint: false,
        },
        chassis: {
          freeFromCracks: false,
          freeFromNonApprovedRepair: false,
        },
        ...this.props.value
      }
    };
  }

  renderArticJointForm() {
    return (
      t.struct({
        noExcessiveFreeplay: t.Boolean,
        jointFixingsSecure: t.Boolean,
        adequatelyLubricated: t.Boolean,
        damageToJoint: t.Boolean,
      })
    );
  }

  renderChassisForm() {
    return (
      t.struct({
        freeFromCracks: t.Boolean,
        freeFromNonApprovedRepair: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      noExcessiveFreeplay: {
        label: 'Articulation joint does not have excessive freeplay'
      },
      jointFixingsSecure: {
        label: 'Articulation joint fixings secure'
      },
      adequatelyLubricated: {
        label: 'Articulation joint adequately lubricated'
      },
      damageToJoint: {
        label: 'Evidence of damage to articulation joint'
      },
      freeFromCracks: {
        label: 'Chassis free from cracks, damage and excessive corrosion'
      },
      freeFromNonApprovedRepair: {
        label: 'Chassis free from any non-approved repair or modification'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Articulation Joint</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="articJoint"
              value={this.state.value.articJoint}
              type={this.renderArticJointForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, articJoint: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Chassis</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="articJoint"
              value={this.state.value.chassis}
              type={this.renderChassisForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, chassis: { ...obj } } }
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


export default ArticJointChassis;
