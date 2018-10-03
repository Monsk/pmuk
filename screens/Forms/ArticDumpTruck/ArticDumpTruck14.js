import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        suspensionSystem: {
          suspensionFunctions: false,
          accumulatorsFreeFromOilLeaks: false,
        },
        tyresAndWheels: {
          servosFreeFromOilLeaks: false,
          servosSecure: false,
          electricalConnectorsSecure: false,
        },
        ...this.props.value
      }
    };
  }

  renderSuspensionSystemForm() {
    return (
      t.struct({
        suspensionFunctions: t.Boolean,
        accumulatorsFreeFromOilLeaks: t.Boolean,
      })
    );
  }

  renderTyresAndWheelsForm() {
    return (
      t.struct({
        correctSizedTyres: t.Boolean,
        freeFromPunctures: t.Boolean,
        wheelNutsInPlace: t.Boolean,
        rimsNoCorrosion: t.Boolean,
        tyresInflated: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      suspensionFunctions: {
        label: 'Suspension system functions correctly'
      },
      accumulatorsFreeFromOilLeaks: {
        label: 'Suspension accumulators free from oil leaks'
      },
      correctSizedTyres: {
        label: 'Correct sized tyres fitted'
      },
      freeFromPunctures: {
        label: 'Tyres free from punctures, cuts and embedded foreign objects'
      },
      wheelNutsInPlace: {
        label: 'All wheel nuts in place and none visibly loose'
      },
      rimsNoCorrosion: {
        label: 'Wheel rims free from damage, wear and excessive corrosion'
      },
      tyresInflated: {
        label: 'Tyres inflated to correct pressure'
      },
    }
  };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Suspension system</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="suspensionSystem"
              value={this.state.value.suspensionSystem}
              type={this.renderSuspensionSystemForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, suspensionSystem: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Tyres and wheels</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="tyresAndWheels"
              value={this.state.value.tyresAndWheels}
              type={this.renderTyresAndWheelsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, tyresAndWheels: { ...obj } } }
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


export default ArticDumpTruck14;
