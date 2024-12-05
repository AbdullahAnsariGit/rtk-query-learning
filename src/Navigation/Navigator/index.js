import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import ParentNavigator from '../ParentNavigator';
import {colors} from '../../theme/colors';
import {useSelector} from 'react-redux';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.theme.black,
  },
};

const Navigator = () => {
  // const reduxData = useSelector(state => console.log(state, 'state-state'));
  return (
    <NavigationContainer theme={MyTheme}>
      <ParentNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
