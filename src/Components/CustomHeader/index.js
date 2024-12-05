import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Platform, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import routes from '../../Navigation/routes';
import {font, layout, spacing} from '../../theme/styles';
import styles from './styles';
// import ActivityLoader from '../ActivityLoader';
import FastImage from 'react-native-fast-image';
import {appImages} from '../../Assets/Images';
import TopLeftBackButton from '../Buttons/TopLeftBackButton';
import TopLeftDrawerButton from '../Buttons/TopLeftDrawerButton';
import MyIcons from '../MyIcons';
import SpaceLine from '../SpaceLine';
import SyneBold from '../wrappers/Texts/SyneBold';
import SyneRegular from '../wrappers/Texts/SyneRegular';
import SyneSemiBold from '../wrappers/Texts/SyneSemiBold';
import CustomText from '../wrappers/Texts/CustomText';
import fonts from '../../Assets/fonts';

const backButtonRoutes = [
  routes.plan.planDetail,
  routes.main.createJournal,
  routes.main.template,
  routes.main.friendProfile,
  routes.main.privacyPolicy,
  routes.main.termAndConditions,
  routes.main.setting,
  routes.main.contactUs,
  routes.main.myFriendsShare,
  routes.main.collaborations,
  routes.main.journalEntryDetails,
  routes.main.createNewJournal,
  routes.main.myProfile,
  routes.main.changePassword,
  routes.main.editJournal,
  routes.main.rafflesDetail,
  routes.main.paymentMethod,
  routes.main.paymentDetails,
  routes.main.rafflesPackages,
  routes.main.chatDetails,
  routes.main.notification,
  routes.main.editProfile,
  routes.main.createRaffles,
  routes.main.rafflesLogs,
];

// const searchRoutes = [
//   routes.tab.home,
//   routes.settings.contactUs,
//   routes.settings.settings,
//   routes.settings.account,
//   routes.editProfile.editProfile,
//   routes.friendSuggestions.friendSuggestions,
//   routes.friendSuggestions.friendDetail,
//   routes.tab.notifications,
//   routes.tab.home,
// ];

const titleRoutes = {
  [routes.main.createJournal]: 'New Journal',
  [routes.main.template]: 'Choose Template',
  [routes.main.friendProfile]: 'Friend Profile',
  [routes.main.privacyPolicy]: 'Privacy Policy',
  [routes.main.termAndConditions]: 'Terms of Use',
  [routes.main.setting]: 'Settings',
  [routes.main.contactUs]: 'Contact Us',
  [routes.main.myFriendsShare]: 'My Friends',
  [routes.main.collaborations]: 'Collaborations',
  [routes.main.journalEntryDetails]: 'Journal Entry Details',
  [routes.main.createNewJournal]: 'Create New Journal',
  [routes.main.myProfile]: 'My Profile',
  [routes.main.changePassword]: 'Change Password',
  [routes.main.editJournal]: 'Edit Journal',
  [routes.main.paymentMethod]: 'Payment Method',
  [routes.main.paymentDetails]: 'Payment Details',
  [routes.main.rafflesPackages]: 'Raffles Packages',
  [routes.tab.chatList]: 'Chats',
  [routes.main.chatDetails]: 'Chat Details',
  [routes.main.notification]: 'Notifications',
  [routes.main.editProfile]: 'Edit Profile',
  [routes.main.rafflesLogs]: 'Raffle Logs',
  [routes.main.createRaffles]: 'Create Raffles',
};

const subtitleRoutes = {
  [routes.plan.paymentMethod]:
    'Enter your credit card details to proceed with payment',
};

const getHeaderLeft = (routeName, navigation) => {
  if (routeName == routes.tab.home || routeName == routes.tab.chatList) {
    return <TopLeftDrawerButton />;
  } else {
    return backButtonRoutes.includes(routeName) ? <TopLeftBackButton /> : null;
  }
};

const GetTitle = ({routeName, username}) => {
  let userNames = username || 'Jimmy';
  //   return (
  //     <View>
  //       <SyneSemiBold style={styles.title} text={routeName} numberOfLines={1}/>
  //       {subtitleRoutes[routeName] && (
  //         <SyneRegular style={styles.subTitle} text={subtitleRoutes[routeName]} />
  //       )}
  //     </View>
  //   );
  if (routeName == routes.tab.home) {
    return (
      <View
        style={[
          {
            gap: spacing.small,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <FastImage
          source={appImages?.profile1}
          style={styles?.userProfileStyles}
        />
        <View>
          <CustomText
            font={fonts.m.regular}
            text={`Hello, ${userNames}`}
            style={{fontSize: font.medium}}
          />
        </View>
      </View>
    );
  } else if (titleRoutes[routeName]) {
    return (
      <View>
        <SyneSemiBold
          style={styles.title}
          text={titleRoutes[routeName]}
          numberOfLines={1}
        />
        {subtitleRoutes[routeName] && (
          <SyneRegular
            style={styles.subTitle}
            text={subtitleRoutes[routeName]}
          />
        )}
      </View>
    );
  } else {
    return null;
  }
};
const getHeaderRight = (
  routeName,
  onSubmitPost,
  title,
  isLoading,
  navigate,
  handleReel,
  selectedMessages,
  selectedMessagesDelete,
  handleVisibility,
) => {
  if (routeName == routes.tab.home || routeName == routes.main.setting) {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles?.rightIconWrapper}
          onPress={() => navigate(routes.main.notification)}>
          <MyIcons name="notification" size={22} />
        </TouchableOpacity>
        {/* <Text>{routeName}</Text> */}
        {/* <TouchableOpacity
          style={styles.searchCircle}
          activeOpacity={0.7}
          onPress={() => navigate(routes.friendSuggestions.searchScreen)}>
          <Image source={images.icons.search} style={styles.messageIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chatCircle}
          activeOpacity={0.7}
          onPress={() => navigate(routes.navigator.chat)}>
          <Image
            source={images.icons.message_outline}
            style={styles.messageIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.chatCircle, {marginHorizontal: 8}]}
          activeOpacity={0.7}
          onPress={() => navigate(routes.reels.reels)}>
          <Ionicon
            name="videocam-outline"
            size={20}
            color={colors.theme.white}
          />
        </TouchableOpacity> */}
      </View>
    );
  }
  return null;
};

// const routesWithBigHeader = [
//   routes.plan.paymentMethod,
//   routes.plan.planDetail,
//   routes.plan.subscriptionPlan,
//   routes.editProfile.addEducation,
//   routes.editProfile.generalDetail,
//   routes.editProfile.editBio,
//   routes.editProfile.editCity,
//   routes.editProfile.editGender,
//   routes.editProfile.editEducation,
//   routes.editProfile.editStatus,
//   routes.editProfile.editDetails,
// ];

const CustomHeader = ({
  routeName,
  onSubmitPost,
  title,
  handleReel,
  selectedMessages,
  selectedMessagesDelete,
}) => {
  //   const isLoading = useSelector(state => state?.commonReducer?.btnLoader);
  const isLoading = false;
  const [visible, setVisible] = useState(false);
  const insets = useSafeAreaInsets();
  const {goBack, navigate} = useNavigation();
  const navigation = useNavigation();
  //   const routeName = useSelector(state => state?.routeReducer?.route);
  //   const profile = useSelector(state => state?.profileReducer?.user);

  //   const dispatch = useDispatch();

  const handleVisibility = () => setVisible(!visible);

  //   const handleLogout = () => {
  //     dispatch(toggleOnlineStatus('offline'));
  //     dispatch(logout());
  //   };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View
          style={[
            layout.flexRow,
            styles.contentContainer,
            Platform.OS === 'ios' && {marginTop: insets.top},
            // routesWithBigHeader.includes(routeName) && styles.expandedHeader,
          ]}>
          <View style={{flex: 1}}>{getHeaderLeft(routeName, navigation)}</View>
          <View style={styles.titleContainer}>
            <GetTitle
              routeName={routeName}
              //   username={profile?.fullName}
            />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            {getHeaderRight(
              routeName,
              onSubmitPost,
              title,
              isLoading,
              navigate,
              handleReel,
              selectedMessages,
              selectedMessagesDelete,
              handleVisibility,
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
