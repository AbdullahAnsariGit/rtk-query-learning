import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import SyneRegular from '../../wrappers/Texts/SyneRegular';
import {layout} from '../../../theme/styles';
import styles from './styles';
import MyIcons from '../../MyIcons';

const IconButton = ({
  disabled,
  icon,
  style,
  iconStyle,
  onPress,
  text,
  item,
  textStyle,
  preText,
  filled,
}) => {
  return (
    <View>
      <TouchableOpacity
        disabled={onPress == undefined || onPress == null ? true : disabled}
        style={[styles.container, layout.flexRow, style]}
        onPress={() => {
          onPress && onPress(item);
        }}>
        {preText && (
          <SyneRegular text={`${preText}  `} style={[styles.text, textStyle]} />
        )}
        <MyIcons name={icon} />
        {text && <SyneRegular text={text} style={[styles.text, textStyle]} />}
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;
