import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        skip: {
          holdsRaised: false,
          freeFromCracks: false,
          pinsFreeFromWear: false,
          bossesFreeFromCracks: false,
          notBent: false,
          boltsSecure: false,
          evidenceOfBrokenPins: false,
          freeFromNonApprovedRepair: false,
          pinsLubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderSkipForm() {
    return (
      t.struct({
        holdsRaised: t.Boolean,
        freeFromCracks: t.Boolean,
        pinsFreeFromWear: t.Boolean,
        bossesFreeFromCracks: t.Boolean,
        notBent: t.Boolean,
        boltsSecure: t.Boolean,
        evidenceOfBrokenPins: t.Boolean,
        freeFromNonApprovedRepair: t.Boolean,
        pinsLubricated: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      holdsRaised: {
        label: 'Skip holds in raised position'
      },
      freeFromCracks: {
        label: 'Skip free from cracks, damage and excessive corrosion'
      },
      pinsFreeFromWear: {
        label: 'All skip pins, bushes and bosses free from excessive wear'
      },
      bossesFreeFromCracks: {
        label: 'All skip pin bosses free from cracks'
      },
      notBent: {
        label: 'Skip not bent or twisted'
      },
      boltsSecure: {
        label: 'All skip pin retaining bolts in position and secure'
      },
      evidenceOfBrokenPins: {
        label: 'Evidence of broken pins in skip'
      },
      freeFromNonApprovedRepair: {
        label: 'Skip free from any non-approved repair or modification'
      },
      pinsLubricated: {
        label: 'All skip pins and bushes adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Skip</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="skip"
              value={this.state.value.skip}
              type={this.renderSkipForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, skip: { ...obj } } }
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


export default ArticDumpTruck8;
