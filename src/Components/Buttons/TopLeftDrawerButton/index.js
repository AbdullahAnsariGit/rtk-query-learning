import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {font, layout, spacing} from '../../../theme/styles';
import MyIcons from '../../MyIcons';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../../theme/units';

import {colors} from '../../../theme/colors';

const TopLeftDrawerButton = ({onPress, style, disabled}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style]}
      onPress={onPress ? onPress : () => navigation.openDrawer()}>
      <MyIcons name={'hamburger'} size={22} />
    </TouchableOpacity>
  );
};

export default TopLeftDrawerButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 6.5,
    borderRadius: layout.borderRadius,
    width: vw * 10,
    marginLeft: 15,
  },
});
