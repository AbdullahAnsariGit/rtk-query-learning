import React from 'react';
import TextButton from '../Buttons/TextButton';
import {View} from 'react-native';
import styles from './styles';
import SyneRegular from '../wrappers/Texts/SyneRegular';
import CustomText from '../wrappers/Texts/CustomText';
import {font} from '../../theme/styles';
import fonts from '../../Assets/fonts';

const AuthTextButton = ({style, text, buttonText, onPress, underLine}) => {
  return (
    <View style={[styles.container, style]}>
      <CustomText text={text} style={styles.text} font={fonts.q.regular} />
      <TextButton
        title={` ${buttonText}`}
        onPress={onPress}
        underLine={underLine}
      />
    </View>
  );
};

export default AuthTextButton;
