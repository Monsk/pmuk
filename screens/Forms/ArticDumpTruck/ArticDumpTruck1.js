import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        accessAndEgress: {
          corrosion: false,
          wear: false,
          modification: false,
        },
        fluids: {
          levels: false,
          contamination: false,
          upToDate: false,
        },
        ...this.props.value
      }
    };
  }

  renderAccessEgressForm() {
    return (
      t.struct({
        corrosion: t.Boolean,
        wear: t.Boolean,
        modification: t.Boolean,
      })
    );
  }

  renderFluidsForm() {
    return (
      t.struct({
        levels: t.Boolean,
        contamination: t.Boolean,
        upToDate: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      corrosion: {
        label: 'Access steps and handrails secure and free from damage and excessive corrosion'
      },
      wear: {
        label: 'Treads on access steps free from excessive wear'
      },
      modification: {
        label: 'Access steps or handrails free from any non-approved repair or modification'
      },
      levels: {
        label: 'Fluid levels correct, e.g. engine oil, coolant, hydraulic oil, etc.'
      },
      contamination: {
        label: 'Fluids for evidence of contamination, e.g. water in oil, etc.'
      },
      upToDate: {
        label: 'Machine servicing up to date'
      }
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h1}>Access & Egress</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="accessAndEgress"
              value={this.state.value.accessAndEgress}
              type={this.renderAccessEgressForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, accessAndEgress: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h1}>Oil & Other Fluids</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="fluids"
              value={this.state.value.fluids}
              type={this.renderFluidsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, fluids: { ...obj } } }
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
  h1: {
    fontSize: 24,
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


export default ArticDumpTruck1;
