import {Text} from 'react-native';

import React from 'react';
import styles from './styles';

const ClashRegular = props => {
  return (
    <Text
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      ellipsizeMode="tail"
      {...props}
      style={[styles.text, styles.clashRegular, props.style]}>
      {props.text}
    </Text>
  );
};

export default ClashRegular;
