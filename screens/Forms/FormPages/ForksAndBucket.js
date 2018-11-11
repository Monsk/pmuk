import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardSection } from '../../../components/common';
import { NavButtons } from '../../../components/NavButtons';


const Form = t.form.Form;

class ForksAndBucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        forksAndBucket: {
          bucketDoesntRoll: false,
          bucketFreeFromCracks: false,
          pinsFreeFromWear: false,
          pinBossesFreeFromCracks: false,
          pinBoltsSecure: false,
          brokenPins: false,
          bucketFreeFromMods: false,
          forksWithinHeelWear: false,
          forkToeNotBent: false,
          pinsLubricated: false,
        },
        ...this.props.value
      }
    };
  }

  renderForksAndBucketForm() {
    return (
      t.struct({
        bucketDoesntRoll: t.Boolean,
        bucketFreeFromCracks: t.Boolean,
        pinsFreeFromWear: t.Boolean,
        pinBossesFreeFromCracks: t.Boolean,
        pinBoltsSecure: t.Boolean,
        brokenPins: t.Boolean,
        bucketFreeFromMods: t.Boolean,
        forksWithinHeelWear: t.Boolean,
        forkToeNotBent: t.Boolean,
        pinsLubricated: t.Boolean,
      })
    );
  }


  render() {
    const options = {
    fields: {
      bucketDoesntRoll: {
        label: 'Bucket does not roll under its own weight'
      },
      bucketFreeFromCracks: {
        label: 'Bucket and forks free from cracks, damage and excessive corrosion'
      },
      pinsFreeFromWear: {
        label: 'All bucket and linkage pins, bushes and bosses free from excessive wear'
      },
      pinBossesFreeFromCracks: {
        label: 'All bucket and linkage pin bosses free from cracks'
      },
      pinBoltsSecure: {
        label: 'All bucket and forks pin retaining bolts in position and secure'
      },
      brokenPins: {
        label: 'Evidence of broken pins in bucket and linkage'
      },
      bucketFreeFromMods: {
        label: 'Bucket and linkage free from any non-approved repair or modification'
      },
      forksWithinHeelWear: {
        label: 'Pallet Forks within heel wear specification'
      },
      forkToeNotBent: {
        label: 'Pallet fork toe not bent or excessivly worn'
      },
      pinsLubricated: {
        label: 'All bucket and linkage pins and bushes adequately lubricated'
      },
      }
    };

    return (
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.h2}>Forks and bucket</Text>
          </View>
          <View style={styles.container}>
            <Form
              ref="forksAndBucket"
              value={this.state.value.forksAndBucket}
              type={this.renderForksAndBucketForm()}
              options={options}
              onChange={obj => this.setState({
                value: { ...this.state.value, forksAndBucket: { ...obj } } }
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


export default ForksAndBucket;
