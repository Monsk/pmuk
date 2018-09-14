import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        steering: {
          steeringFunctions: false,
          pinsAndBushesSecure: false,
          valveSecure: false,
          pinsAndBushesLubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderSteeringForm() {
    return (
      t.struct({
        steeringFunctions: t.Boolean,
        pinsAndBushesSecure: t.Boolean,
        valveSecure: t.Boolean,
        pinsAndBushesLubricated: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      steeringFunctions: {
        label: 'Steering functions correctly - full left and right lock'
      },
      pinsAndBushesSecure: {
        label: 'Steering cylinder pins and bushes secure and free from excessive wear'
      },
      valveSecure: {
        label: 'Steering valve secure and free from oil leaks'
      },
      pinsAndBushesLubricated: {
        label: 'All steering pins and bushes adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Steering</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="steering"
              value={this.state.value.steering}
              type={this.renderSteeringForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, steering: { ...obj } } }
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


export default ArticDumpTruck6;
