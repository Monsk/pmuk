import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../components/common';
import { NavButtons } from '../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        covers1: true,
        covers2: false,
        windows1: false,
        windows2: false,
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
        covers1: t.Boolean,
        covers2: t.Boolean,
      })
    );
  }

  renderFormB() {
    return (
      t.struct({
        windows1: t.Boolean,
        windows2: t.Boolean,
      })
    );
  }

  render() {
    const options = {
    fields: {
      covers1: {
        label: 'Fan and drive belt guards in position, secure and free from damage'
      },
      covers2: {
        label: 'All machine panels and guards in position, secure and free from damage'
      },
      windows1: {
        label: 'Windscreen free from cracks or scratches which obscure operator’s field of view'
      },
      windows2: {
        label: 'Other cab windows free from damage'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h1}>Covers & Guards</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="formA"
              value={this.state.value}
              type={this.renderFormA()}
              options={options}
              onChange={value => this.setState({ value })}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h1}>Windscreen & Cab Windows</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="formB"
              value={this.state.value}
              type={this.renderFormB()}
              options={options}
              onChange={value => this.setState({ value })}
            />
          </View>
        </KeyboardAwareScrollView>
        <CardSection>
          <NavButtons
            submit
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


export default ArticDumpTruck2;
