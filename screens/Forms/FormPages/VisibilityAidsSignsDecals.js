import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class VisibilityAidsSignsDecals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        visibilityAids: {
          allMirrors: false,
          correctMirrors: false,
          camera: false,
        },
        signsAndDecals: {
          idDisplayed: false,
          warningSignDisplayed: false,
        },
        ...this.props.value
      }
    };
  }

  renderVisibilityAidsForm() {
    return (
      t.struct({
        allMirrors: t.Boolean,
        correctMirrors: t.Boolean,
        camera: t.Boolean,
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
      allMirrors: {
        label: 'All mirrors in position and free from damage'
      },
      correctMirrors: {
        label: 'Correct mirrors fitted'
      },
      camera: {
        label: 'Camera and monitor function correctly'
      },
      idDisplayed: {
        label: 'CE and machine identification plate displayed and legible'
      },
      warningSignDisplayed: {
        label: 'All warning signs and decals displayed and legible'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Visibility aids</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="visibilityAids"
              value={this.state.value.visibilityAids}
              type={this.renderVisibilityAidsForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, visibilityAids: { ...obj } } }
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


export default VisibilityAidsSignsDecals;
