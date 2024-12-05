import {StyleSheet, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const PoppinsRegular = props => {
  console.log('props', props?.text);

  return (
    <Text
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      ellipsizeMode="tail"
      {...props}
      style={[styles.text, styles.poppinsRegular, props.style]}>
      {props.text}
    </Text>
  );
};

export default PoppinsRegular;
