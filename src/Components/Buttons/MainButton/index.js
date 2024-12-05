import {TouchableOpacity} from 'react-native';

import React from 'react';
import styles from './styles';
import SyneBold from '../../wrappers/Texts/SyneBold';
import Animated, {FadeOut, SlideInDown} from 'react-native-reanimated';
import CustomText from '../../wrappers/Texts/CustomText';
import {font} from '../../../theme/styles';
import fonts from '../../../Assets/fonts';

const MainButton = ({
  style,
  title,
  onPress,
  textStyle,
  disabled,
  animation,
}) => {
  return (
    <Animated.View
      exiting={FadeOut.duration(600)}
      entering={animation ? animation : SlideInDown.duration(300)}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        style={[
          styles.container,
          style,
          disabled && {backgroundColor: '#d6464b'},
        ]}
        onPress={onPress}>
        <CustomText
          text={title}
          font={fonts.m.regular}
          size={font.medium}
          style={[styles.textStyle, textStyle]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MainButton;
