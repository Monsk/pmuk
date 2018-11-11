import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class HydraulicCylinders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        hydraulicCylinders: {
          freeFromCreep: false,
          freeFromOilLeaks: false,
          freeFromBending: false,
          freeFromCorrosion: false,
          freeFromCracks: false,
          freeFromWear: false,
          boltsSecure: false,
          evidenceOfBrokenPins: false,
          freeFromNonApprovedRepair: false,
          adequatelyLubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderHydraulicCylinderForm() {
    return (
      t.struct({
        freeFromCreep: t.Boolean,
        freeFromOilLeaks: t.Boolean,
        freeFromBending: t.Boolean,
        freeFromCorrosion: t.Boolean,
        freeFromCracks: t.Boolean,
        freeFromWear: t.Boolean,
        boltsSecure: t.Boolean,
        evidenceOfBrokenPins: t.Boolean,
        freeFromNonApprovedRepair: t.Boolean,
        adequatelyLubricated: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      freeFromCreep: {
        label: 'All hydraulic cylinders free from exessive creep'
      },
      freeFromOilLeaks: {
        label: 'All hydraulic cylinder jackets and rod seals free from oil leaks'
      },
      freeFromBending: {
        label: 'All hydraulic cylinder rods free from scoring or bending'
      },
      freeFromCorrosion: {
        label: 'All hydraulic cylinder rods and cylinder jackets free from excessive corrosion'
      },
      freeFromCracks: {
        label: 'All hydraulic cylinder jackets free from cracks'
      },
      freeFromWear: {
        label: 'All hydraulic cylinder pins and bushes free from excessive wear'
      },
      boltsSecure: {
        label: 'All hydraulic cylinder pin retaining bolts in position and secure'
      },
      evidenceOfBrokenPins: {
        label: 'Evidence of broken pins in hydraulic cylinders and rods'
      },
      freeFromNonApprovedRepair: {
        label: 'All hydraulic cylinders free from any non-approved repair or modification'
      },
      adequatelyLubricated: {
        label: 'All hydraulic cylinder pins and bushes adequately lubricated'
      },
    }
  };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Hydraulic cylinders</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="hydraulicCylinders"
              value={this.state.value.hydraulicCylinders}
              type={this.renderHydraulicCylinderForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, hydraulicCylinders: { ...obj } } }
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


export default HydraulicCylinders;
