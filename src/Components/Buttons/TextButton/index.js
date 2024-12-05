import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import BenzinBold from '../../wrappers/Texts/BenzinBold';
import SyneRegular from '../../wrappers/Texts/SyneRegular';

const TextButton = ({style, title, onPress, underLine}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <SyneRegular
        text={title}
        style={[
          styles.textStyle,
          style,
          {textDecorationLine: underLine ? 'underline' : 'none'},
        ]}
      />
    </TouchableOpacity>
  );
};

export default TextButton;
