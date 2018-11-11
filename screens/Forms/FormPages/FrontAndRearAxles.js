import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class FrontAndRearAxles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        frontAndRearAxles: {
          rearAxleFreeFromCracks: false,
          rearAxlePinsFreeFromWear: false,
          rearAxleBoltsSecure: false,
          propshaftsSecure: false,
          axlesFreeFromOilLeaks: false,
          frontAxleBoltsSecure: false,
          freeFromNonApprovedRepair: false,
          trunionBearingsLubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderAxlesForm() {
    return (
      t.struct({
        rearAxleFreeFromCracks: t.Boolean,
        rearAxlePinsFreeFromWear: t.Boolean,
        rearAxleBoltsSecure: t.Boolean,
        propshaftsSecure: t.Boolean,
        axlesFreeFromOilLeaks: t.Boolean,
        frontAxleBoltsSecure: t.Boolean,
        freeFromNonApprovedRepair: t.Boolean,
        trunionBearingsLubricated: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      rearAxleFreeFromCracks: {
        label: 'Rear axle trunion free from cracks, damage and excessive corrosion'
      },
      rearAxlePinsFreeFromWear: {
        label: 'Rear axle trunion pins and bearings free from excessive wear'
      },
      rearAxleBoltsSecure: {
        label: 'Rear axle trunion bolts in position and secure'
      },
      propshaftsSecure: {
        label: 'Front and rear axle propshafts secure and free from excessive wear'
      },
      axlesFreeFromOilLeaks: {
        label: 'Front and rear axles free from oil leaks'
      },
      frontAxleBoltsSecure: {
        label: 'Front axle mounting bolts in position and secure'
      },
      freeFromNonApprovedRepair: {
        label: 'Front and rear axles free from any non-approved repair or modification'
      },
      trunionBearingsLubricated: {
        label: 'Rear axle trunion bearings and propshafts adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Front and rear axles</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="frontAndRearAxles"
              value={this.state.value.frontAndRearAxles}
              type={this.renderAxlesForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, frontAndRearAxles: { ...obj } } }
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


export default FrontAndRearAxles;
