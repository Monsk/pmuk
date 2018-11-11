import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class TelescopicExtension extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        telescopicExtension: {
          stationaryUnderLoad: false,
          slideFreeFromWear: false,
          extendsCorrectly: false,
          lubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderTelescopicExtensionForm() {
    return (
      t.struct({
        stationaryUnderLoad: t.Boolean,
        slideFreeFromWear: t.Boolean,
        extendsCorrectly: t.Boolean,
        lubricated: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      stationaryUnderLoad: {
        label: 'Telescopic extension stationary under load'
      },
      slideFreeFromWear: {
        label: 'Telescopic extension slide mechanism free from excessive wear or corrosion'
      },
      extendsCorrectly: {
        label: 'Telescopic extension extends and retracts correctly'
      },
      lubricated: {
        label: 'Telescopic extension components adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Telescopic extension</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="telescopicExtension"
              value={this.state.value.telescopicExtension}
              type={this.renderTelescopicExtensionForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, telescopicExtension: { ...obj } } }
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


export default TelescopicExtension;
