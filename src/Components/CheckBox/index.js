import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {easeInEaseOut} from '../../theme/animations';
import {layout} from '../../theme/styles';
import styles from './styles';
import MyIcons from '../MyIcons';
import SyneRegular from '../wrappers/Texts/SyneRegular';
import {vw} from '../../theme/units';

const CheckBox = ({
  style,
  selected,
  disabled,
  checked,
  setChecked,
  checkContainerStyle,
  checkStyle,
  text,
  textStyle,
  highligthStyle,
}) => {
  const onPress = () => (
    easeInEaseOut(50), setChecked(prevState => !prevState)
  );

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[layout.flexRow, style]}
      onPress={onPress}>
      <View
        style={[
          styles.checkContainer,
          checkContainerStyle,
          (selected || checked) && highligthStyle,
        ]}>
        {(selected || checked) && <MyIcons name={'tick'} size={vw * 3} />}
      </View>
      {text && <SyneRegular style={[styles.text, textStyle]} text={text} />}
    </TouchableOpacity>
  );
};

export default CheckBox;
