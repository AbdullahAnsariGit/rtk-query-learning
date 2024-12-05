import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {font, layout, spacing} from '../../../theme/styles';
import MyIcons from '../../MyIcons';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../../theme/units';

import {colors} from '../../../theme/colors';

const TopLeftBackButton = ({onPress, style, disabled}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style]}
      onPress={onPress ? onPress : () => navigation?.goBack()}>
      <MyIcons name={'back'} size={18} />
    </TouchableOpacity>
  );
};

export default TopLeftBackButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 6.5,
    borderRadius: layout.borderRadius,
    width: vw * 10,
    backgroundColor: colors.background.background,
    marginLeft: 15,
    borderWidth: layout.borderWidth,
    borderColor: colors?.border.border,
  },
});
