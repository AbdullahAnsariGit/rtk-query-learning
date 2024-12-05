import React from 'react';
import {ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

const Container = ({
  keyboardAware,
  children,
  contentContainerStyle,
  style,
  keyboardHandled,
}) => {
  const Scroll = keyboardAware ? KeyboardAwareScrollView : ScrollView;

  return (
    <Scroll
      style={style}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.contentContainerStyle,
        contentContainerStyle,
      ]}
      keyboardShouldPersistTaps={keyboardHandled}>
      {children}
    </Scroll>
  );
};

export default Container;
