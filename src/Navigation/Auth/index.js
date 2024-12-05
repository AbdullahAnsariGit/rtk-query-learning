import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import LoginScreen from '../../Screens/Auth/Login';
import SignupScreen from '../../Screens/Auth/SignUp';
import ForgotPassword from '../../Screens/Auth/ForgotPassword';
import PaymentDetails from '../../Screens/Main/PaymentDetails';

import NavigationOptions from '../NavigationOptions';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.auth.login}
      screenOptions={NavigationOptions}>
      <Stack.Screen name={routes.auth.login} component={LoginScreen} />
      <Stack.Screen name={routes.auth.signup} component={SignupScreen} />
      <Stack.Screen name={routes.auth.forgot} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default Auth;
