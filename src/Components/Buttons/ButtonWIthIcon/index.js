import {TouchableOpacity} from 'react-native';

// import EuclidCircularAMedium from '../../wrappers/Texts/EuclidCircularAMedium';
import React from 'react';
import styles from './styles';
import SyneRegular from '../../wrappers/Texts/SyneRegular';
import MyIcons from '../../MyIcons';

const ButtonWithIcon = ({
  style,
  title,
  onPress,
  textStyle,
  disabled,
  iconName,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style, disabled && {backgroundColor: 'grey'}]}
      onPress={onPress}>
      {iconName && <MyIcons name={iconName} color="transparent" size={16} />}
      <SyneRegular style={[styles.textStyle, textStyle]} text={title} />
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
