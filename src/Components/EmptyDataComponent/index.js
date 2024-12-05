import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomText from '../wrappers/Texts/CustomText';
import fonts from '../../Assets/fonts';
import {font} from '../../theme/styles';
import {colors} from '../../theme/colors';

const EmptyDataComponent = ({message = 'No data available!'}) => {
  return (
    <View style={styles.container}>
      <CustomText
        text={message}
        font={fonts.e.medium}
        size={font.medium}
        color={colors.text.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default EmptyDataComponent;
