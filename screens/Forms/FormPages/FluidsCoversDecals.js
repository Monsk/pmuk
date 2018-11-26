import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class FluidsCoversDecals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        oilAndFluids: {
          fluidLevelsCorrect: false,
          gearboxLevels: false,
        },
        coversAndGuards: {
          panelsInPosition: false,
        },
        signsAndDecals: {
          idDisplayed: false,
          warningSignDisplayed: false,
        },
        ...this.props.value
      }
    };
  }

  renderOilAndFluidsForm() {
    return (
      t.struct({
        fluidLevelsCorrect: t.Boolean,
        gearboxLevels: t.Boolean,
      })
    );
  }

  renderCoversAndGuardsForm() {
    return (
      t.struct({
        panelsInPosition: t.Boolean,
      })
    );
  }

  renderSignsAndDecalsForm() {
    return (
      t.struct({
        idDisplayed: t.Boolean,
        warningSignDisplayed: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      fluidLevelsCorrect: {
        label: 'Fluid levels correct and free from contamination, e.g. hydraulic oil.'
      },
      gearboxLevels: {
        label: 'Gearbox levels, signs of weeping or oil loss, mounting Bolts'
      },
      panelsInPosition: {
        label: 'All machine panels and guards in position, secure and free from damage'
      },
      idDisplayed: {
        label: 'CE and machine identification plate displayed and legible'
      },
      warningSignDisplayed: {
        label: 'All warning signs and decals displayed and legible in jib correct position'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Oil and other fluids</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="oilAndFluids"
              value={this.state.value.oilAndFluids}
              type={this.renderOilAndFluidsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, oilAndFluids: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Covers and guards</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="coversAndGuards"
              value={this.state.value.coversAndGuards}
              type={this.renderCoversAndGuardsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, coversAndGuards: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Signs and decals</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="signsAndDecals"
              value={this.state.value.signsAndDecals}
              type={this.renderSignsAndDecalsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, signsAndDecals: { ...obj } } }
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


export default FluidsCoversDecals;
