import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class LoadAttachmentPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        loadAttachmentPoint: {
          safetyCatchSecure: false,
          hookFreeFromCracks: false,
          hookFreeFromMods: false,
        },
        ...this.props.value
      }
    };
  }

  renderLoadAttachmentPointForm() {
    return (
      t.struct({
        safetyCatchSecure: t.Boolean,
        hookFreeFromCracks: t.Boolean,
        hookFreeFromMods: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      safetyCatchSecure: {
        label: 'Hook safety catch secure, in position and functions correctly'
      },
      hookFreeFromCracks: {
        label: 'Hook / eye free from cracks, damage or excessive wear'
      },
      hookFreeFromMods: {
        label: 'Hook / eye free from any non-approved repair or modification'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Load attachment point</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="loadAttachmentPoint"
              value={this.state.value.loadAttachmentPoint}
              type={this.renderLoadAttachmentPointForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, loadAttachmentPoint: { ...obj } } }
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


export default LoadAttachmentPoint;
