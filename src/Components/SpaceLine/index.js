import React from 'react';
import {View, StyleSheet} from 'react-native';

const SpaceLine = ({style}) => {
  return <View style={[styles.spaceLine, style]} />;
};

const styles = StyleSheet.create({
  spaceLine: {
    margin: 3,
  },
});

export default SpaceLine;
