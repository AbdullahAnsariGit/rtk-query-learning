import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routes from '../routes';
import TabBar from '../../Components/Navigation/Tabbar';
import Home from '../../Screens/Main/Home';
import Media from '../../Screens/Main/ChatList';
import ChatList from '../../Screens/Main/ChatList';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Home'}>
      <Tab.Screen name={routes?.tab?.home} component={Home} />
      <Tab.Screen name={'tabbar4'} component={'tabbar4'} />

      <Tab.Screen name={routes?.tab?.chatList} component={ChatList} />
    </Tab.Navigator>
  );
};
