import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import NavigationOptions from '../NavigationOptions';
import MyProfile from '../../Screens/Main/MyProfile';
import EditProfile from '../../Screens/Main/EditProfile';
import ChangePassword from '../../Screens/Main/ChangePassword';
import ContactUs from '../../Screens/Main/ContactUs';
import UserAppStack from '../Drawers/Drawers';
import PrivacyPolicy from '../../Screens/Main/PrivacyPolicy';
import TermAndConditions from '../../Screens/Main/TermAndConditions';
import CreateNewJournal from '../../Screens/Main/CreateRaffles';
import RafflesDetails from '../../Screens/Main/RafflesDetails';
import PaymentDetails from '../../Screens/Main/PaymentDetails';
import PaymentMethod from '../../Screens/Main/PaymentMethod';
import RafflesPackages from '../../Screens/Main/RafflesPackages';
import ChatDetails from '../../Screens/Main/ChatDetails';
import Notification from '../../Screens/Main/Notification';
import CreateRaffles from '../../Screens/Main/CreateRaffles';
import RafflesLogs from '../../Screens/Main/RafflesLogs';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.auth.welcome}
      screenOptions={NavigationOptions}>
      <Stack.Screen name={routes.navigator.tab} component={UserAppStack} />

      <Stack.Screen name={routes.main.myProfile} component={MyProfile} />
      <Stack.Screen name={routes.main.editProfile} component={EditProfile} />

      <Stack.Screen
        name={routes.main.changePassword}
        component={ChangePassword}
      />
      <Stack.Screen name={routes.main.contactUs} component={ContactUs} />

      <Stack.Screen
        name={routes.main.privacyPolicy}
        component={PrivacyPolicy}
      />
      <Stack.Screen
        name={routes.main.termAndConditions}
        component={TermAndConditions}
      />

      <Stack.Screen
        name={routes.main.createNewJournal}
        component={CreateNewJournal}
      />
      <Stack.Screen
        name={routes.main.rafflesDetail}
        component={RafflesDetails}
      />
      <Stack.Screen
        name={routes.main.paymentMethod}
        component={PaymentMethod}
      />
      <Stack.Screen
        name={routes.main.paymentDetails}
        component={PaymentDetails}
      />
      <Stack.Screen
        name={routes.main.rafflesPackages}
        component={RafflesPackages}
      />
      <Stack.Screen name={routes.main.chatDetails} component={ChatDetails} />
      <Stack.Screen name={routes.main.notification} component={Notification} />
      <Stack.Screen
        name={routes.main.createRaffles}
        component={CreateRaffles}
      />
      <Stack.Screen name={routes.main.rafflesLogs} component={RafflesLogs} />
    </Stack.Navigator>
  );
};

export default Main;
