import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ArticDumpTruck12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        hydraulicPipes: {
          jointsFreeFromOilLeaks: false,
          pipesFreeFromDeformities: false,
          clampsInPlace: false,
        },
        hydraulicHoses: {
          hosesFreeFromOilLeaks: false,
          freeFromExposedWires: false,
          hosesFreeFromDeformities: false,
          correctLengthHoses: false,
          hoseClampsInPlace: false,
        },
        ...this.props.value
      }
    };
  }

  renderHydraulicPipesForm() {
    return (
      t.struct({
        jointsFreeFromOilLeaks: t.Boolean,
        pipesFreeFromDeformities: t.Boolean,
        clampsInPlace: t.Boolean,
      })
    );
  }

  renderHydraulicHosesForm() {
    return (
      t.struct({
        hosesFreeFromOilLeaks: t.Boolean,
        freeFromExposedWires: t.Boolean,
        hosesFreeFromDeformities: t.Boolean,
        correctLengthHoses: t.Boolean,
        hoseClampsInPlace: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      jointsFreeFromOilLeaks: {
        label: 'All pipe joints free from oil leaks'
      },
      pipesFreeFromDeformities: {
        label: 'All pipes free from dents, bending, crushing or other deformities'
      },
      clampsInPlace: {
        label: 'Pipe securing clamps in place and secure'
      },
      hosesFreeFromOilLeaks: {
        label: 'All hoses or joints free from oil leaks'
      },
      freeFromExposedWires: {
        label: 'All hoses free from exposed broken wires'
      },
      hosesFreeFromDeformities: {
        label: 'All hoses free from kinks, crushing, stretching, chafing or other deformities'
      },
      correctLengthHoses: {
        label: 'Correct length hoses fitted'
      },
      hoseClampsInPlace: {
        label: 'Hose securing clamps in place and secure'
      },
    }
  };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Hydraulic Pipes</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="hydraulicPipes"
              value={this.state.value.hydraulicPipes}
              type={this.renderHydraulicPipesForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, hydraulicPipes: { ...obj } } }
              )}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.h2}>Hydraulic Hoses</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="hydraulicHoses"
              value={this.state.value.hydraulicHoses}
              type={this.renderHydraulicHosesForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, hydraulicHoses: { ...obj } } }
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


export default ArticDumpTruck12;
