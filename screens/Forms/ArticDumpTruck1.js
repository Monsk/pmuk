import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../components/common';
import { NavButtons } from '../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        accessAndEgress1: false,
        accessAndEgress2: false,
        accessAndEgress3: false,
        fluids1: false,
        fluids2: false,
        fluids3: false,
        ...this.props.value
      }
    };
  }

  onFormSubmit() {
    const { onSubmit } = this.props;
    const value = this.refs.form.getValue();
    if (value) {
      onSubmit(this.state.value);
    }
  }

  renderFormA() {
    return (
      t.struct({
        accessAndEgress1: t.Boolean,
        accessAndEgress2: t.Boolean,
        accessAndEgress3: t.Boolean
      })
    );
  }

  renderFormB() {
    return (
      t.struct({
        fluids1: t.Boolean,
        fluids2: t.Boolean,
        fluids3: t.Boolean
      })
    );
  }

  render() {
    const options = {
    fields: {
      accessAndEgress1: {
        label: 'Access steps and handrails secure and free from damage and excessive corrosion'
      },
      accessAndEgress2: {
        label: 'Treads on access steps free from excessive wear'
      },
      accessAndEgress3: {
        label: 'Access steps or handrails free from any non-approved repair or modification'
      },
      fluids1: {
        label: 'Fluid levels correct, e.g. engine oil, coolant, hydraulic oil, etc.'
      },
      fluids2: {
        label: 'Fluids for evidence of contamination, e.g. water in oil, etc.'
      },
      fluids3: {
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
              ref="form"
              value={this.state.value}
              type={this.renderFormA()}
              options={options}
              onChange={value => this.setState({ value })}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h1}>Oil & Other Fluids</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="form"
              value={this.state.value}
              type={this.renderFormB()}
              options={options}
              onChange={value => this.setState({ value })}
            />
          </View>
        </KeyboardAwareScrollView>
        <CardSection>
          <NavButtons
            onNext={this.onFormSubmit.bind(this)}
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
