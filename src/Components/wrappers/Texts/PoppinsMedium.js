import {StyleSheet, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const PoppinsMedium = props => {
  console.log('props', props?.text);

  return (
    <Text
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      ellipsizeMode="tail"
      {...props}
      style={[styles.text, styles.poppinsMedium, props.style]}>
      {props.text}
    </Text>
  );
};

export default PoppinsMedium;
