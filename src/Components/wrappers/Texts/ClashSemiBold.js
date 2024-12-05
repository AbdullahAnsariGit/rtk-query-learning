import {StyleSheet, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const ClashBold = props => {
  return (
    <Text
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      ellipsizeMode="tail"
      {...props}
      style={[styles.text, styles.clashSemibold, props.style]}>
      {props.text}
    </Text>
  );
};

export default ClashBold;
