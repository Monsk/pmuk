import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class LiftCapTableRCI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        liftCapTable: {
          liftCapacityTable: false,
        },
        RCI: {
          RCIFunctional: false,
          RCIDisplay: false,
          RCICalibration: false,
        },
        ...this.props.value
      }
    };
  }

  renderLiftCapTableForm() {
    return (
      t.struct({
        liftCapacityTable: t.Boolean,
      })
    );
  }

  renderRCIForm() {
    return (
      t.struct({
        RCIFunctional: t.Boolean,
        RCIDisplay: t.Boolean,
        RCICalibration: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      liftCapacityTable: {
        label: 'Correct lift capacity table for machine displayed or available in cab'
      },
      RCIFunctional: {
        label: 'RCI functional'
      },
      RCIDisplay: {
        label: 'RCI displays correct readings'
      },
      RCICalibration: {
        label: 'RCI tested to ensure correct calibration within last 12 months'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Lift capacity table</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="liftCapTable"
              value={this.state.value.liftCapTable}
              type={this.renderLiftCapTableForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, liftCapTable: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Rated capacity indicator</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="liftCapTable"
              value={this.state.value.RCI}
              type={this.renderRCIForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, RCI: { ...obj } } }
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


export default LiftCapTableRCI;
