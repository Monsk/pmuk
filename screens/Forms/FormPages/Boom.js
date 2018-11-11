import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class Boom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        boom: {
          boomHoldsRaised: false,
          boomFreeFromCracks: false,
          bushesFreeFromWear: false,
          pinBossesFreeFromCracks: false,
          boomNotBent: false,
          pinBoltsSecure: false,
          brokenPins: false,
          boomFreeFromMods: false,
          lubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderBoomForm() {
    return (
      t.struct({
        boomHoldsRaised: t.Boolean,
        boomFreeFromCracks: t.Boolean,
        bushesFreeFromWear: t.Boolean,
        pinBossesFreeFromCracks: t.Boolean,
        boomNotBent: t.Boolean,
        pinBoltsSecure: t.Boolean,
        brokenPins: t.Boolean,
        boomFreeFromMods: t.Boolean,
        lubricated: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      boomHoldsRaised: {
        label: 'Boom holds in raised position'
      },
      boomFreeFromCracks: {
        label: 'Boom free from cracks, damage and excessive corrosion'
      },
      bushesFreeFromWear: {
        label: 'All boom bushes and bosses free from excessive wear'
      },
      pinBossesFreeFromCracks: {
        label: 'All boom pin bosses free from cracks'
      },
      boomNotBent: {
        label: 'Boom not bent or twisted'
      },
      pinBoltsSecure: {
        label: 'All boom pin retaining bolts in position and secure'
      },
      brokenPins: {
        label: 'Evidence of broken pins in boom'
      },
      boomFreeFromMods: {
        label: 'Boom free from any non-approved repair or modification'
      },
      lubricated: {
        label: 'All boom pins, bushes and bearings adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Boom</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="boom"
              value={this.state.value.boom}
              type={this.renderBoomForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, boom: { ...obj } } }
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


export default Boom;
