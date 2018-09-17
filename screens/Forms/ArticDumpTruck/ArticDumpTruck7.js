import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        brakes: {
          serviceBrakeFunctions: false,
          parkingBrakeHolds: false,
          brakePipesNoCorrosion: false,
          brakeControlsFunction: false,
          warningLightsFunction: false,
        },
        ...this.props.value
      }
    };
  }

  renderBrakeForm() {
    return (
      t.struct({
        serviceBrakeFunctions: t.Boolean,
        parkingBrakeHolds: t.Boolean,
        brakePipesNoCorrosion: t.Boolean,
        brakeControlsFunction: t.Boolean,
        warningLightsFunction: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      serviceBrakeFunctions: {
        label: 'Service brakes function adequately'
      },
      parkingBrakeHolds: {
        label: 'Parking brake holds'
      },
      brakePipesNoCorrosion: {
        label: 'Brake pipes and actuators free from excessive corrosion and oil leaks'
      },
      brakeControlsFunction: {
        label: 'Brake controls function correctly'
      },
      warningLightsFunction: {
        label: 'Brake warning lights functional'
      }
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Brakes</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="brakes"
              value={this.state.value.brakes}
              type={this.renderBrakeForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, brakes: { ...obj } } }
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


export default ArticDumpTruck7;
