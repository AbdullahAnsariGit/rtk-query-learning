import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabs} from '../Tabs/BottomTabs';
import DrawerComp from '../../Components/Navigation/Drawer';

const Drawer = createDrawerNavigator();

const UserAppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '100%',
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'BottomTabs'}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="BottomTabs"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  );
};

export default UserAppStack;
