import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './common';

const NavButtons = ({ onNext, onBack, singleNav, submit }) => {
    if (singleNav) {
      return (
        <Button onPress={onNext}>
          Next
        </Button>
      );
    }

    return (
      <View style={styles.buttons}>
        <Button onPress={onBack}>
          Back
        </Button>
        <Button onPress={onNext}>
          {submit ? 'Submit' : 'Next'}
        </Button>
      </View>
    );
};

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export { NavButtons };
