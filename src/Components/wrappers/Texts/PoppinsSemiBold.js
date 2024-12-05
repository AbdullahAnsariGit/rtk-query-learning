import {StyleSheet, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const PoppinsSemiBold = props => {
  console.log('props', props?.text);

  return (
    <Text
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      ellipsizeMode="tail"
      {...props}
      style={[styles.text, styles.poppinsSemiBold, props.style]}>
      {props.text}
    </Text>
  );
};

export default PoppinsSemiBold;
