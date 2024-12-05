import {Image, TouchableOpacity} from 'react-native';

import React from 'react';
import styles from './styles';
import {colors} from '../../../theme/colors';
import BenzinBold from '../../wrappers/Texts/BenzinBold';
import SyneRegular from '../../wrappers/Texts/SyneRegular';
import SyneBold from '../../wrappers/Texts/SyneBold';

const OutlineButton = ({style, title, onPress, textStyle, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style, disabled && {backgroundColor: 'grey'}]}
      onPress={onPress}>
      <SyneBold text={title} style={[styles.textStyle, textStyle]} />
    </TouchableOpacity>
  );
};

export default OutlineButton;
