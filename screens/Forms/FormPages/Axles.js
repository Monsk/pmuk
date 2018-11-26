import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class Axles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        axles: {
          freeFromCracks: false,
          propshaftSecure: false,
          freeFromOilLeaks: false,
          mountingBoltsSecure: false,
          freeFromNonApprovedRepair: false,
          adequatelyLubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderAxlesForm() {
    return (
      t.struct({
        freeFromCracks: t.Boolean,
        propshaftSecure: t.Boolean,
        freeFromOilLeaks: t.Boolean,
        mountingBoltsSecure: t.Boolean,
        freeFromNonApprovedRepair: t.Boolean,
        adequatelyLubricated: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      freeFromCracks: {
        label: 'Axle trunions / mountings free from cracks, damage and excessive corrosion'
      },
      propshaftSecure: {
        label: 'Axle propshafts secure and free from excessive wear'
      },
      freeFromOilLeaks: {
        label: 'Axles free from oil leaks'
      },
      mountingBoltsSecure: {
        label: 'Axle mounting bolts in position and secure'
      },
      freeFromNonApprovedRepair: {
        label: 'Axles free from any non-approved repair or modification'
      },
      adequatelyLubricated: {
        label: 'Axle trunion bearings, mountings and propshafts adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Axles</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="axles"
              value={this.state.value.axles}
              type={this.renderAxlesForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, axles: { ...obj } } }
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


export default Axles;
