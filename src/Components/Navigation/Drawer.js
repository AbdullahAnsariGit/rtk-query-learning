import React, {useRef} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Linking,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import {appImages} from '../../Assets/Images';
import {font, layout, spacing} from '../../theme/styles';
import MyIcons from '../MyIcons';
import {colors} from '../../theme/colors';
import FastImage from 'react-native-fast-image';
import {vh, vw} from '../../theme/units';
import routes from '../../Navigation/routes';
import {useResetToScreen} from '../../Functions/resetToScreen';
import Background from '../Background';
import CustomText from '../wrappers/Texts/CustomText';
import fonts from '../../Assets/fonts';
import Animated, {
  FadeInUp,
  FadeOut,
  SlideInDown,
} from 'react-native-reanimated';
import BottomSheet from '../BottomSheet';
import {useDispatch, useSelector} from 'react-redux';
import {clearAuth} from '../../Store/slices/authSlice';

const {height} = Dimensions.get('screen');

const menuItems = [
  {
    icon: 'draweruser',
    title: 'EDIT PROFILE',
    nav: routes?.main.editProfile,
  },
  {
    icon: 'drawerlock',
    title: 'CHANGE PASSWORD',
    nav: routes?.main?.changePassword,
  },
  {
    icon: 'drawerraffles',
    title: 'RAFFLES PACKAGES',
    nav: routes?.main.rafflesPackages,
  },
  {
    icon: 'drawerraffles',
    title: 'RAFFLES LOGS',
    nav: routes?.main.rafflesLogs,
  },
  {
    icon: 'drawercall',
    title: 'CONTACT US',
    nav: routes?.main?.contactUs,
  },
  {
    icon: 'drawerpolicy',
    title: 'PRIAVCY POLICY',
    nav: routes?.main?.privacyPolicy,
  },
  {
    icon: 'drawerterm',
    title: 'TERM OF USE',
    nav: routes?.main?.termAndConditions,
  },
  {
    icon: 'drawerlogout',
    title: 'LOGOUT',
    nav: routes?.main?.createNewJournal,
  },
];

const DrawerComp = ({navigation}) => {
  const dispatch = useDispatch();
  const {resetToScreen} = useResetToScreen();
  const logoutPopRef = useRef(null);
  const handleCloseModal = () => {
    if (logoutPopRef.current) logoutPopRef.current.close();
  };
  const handleSuccessModal = () => {
    if (logoutPopRef.current) logoutPopRef.current.close();
    navigation.closeDrawer();
    setTimeout(() => {
      resetToScreen(0, routes.mainStack.auth);
    }, 650);
  };
  const helpSuccess = () => {
    if (logoutPopRef.current) {
      logoutPopRef.current.close();
    }
    // dispatch(logoutUser());
  };
  const onPressNo = () => {
    if (logoutPopRef.current) {
      logoutPopRef.current.close();
    }
  };

  const onPressYes = () => {
    if (logoutPopRef.current) {
      logoutPopRef.current.close();
    }
    setTimeout(() => {
      // resetToScreen(0, routes.mainStack.auth);
      dispatch(clearAuth());
    }, 650);
  };
  const renderItem = ({item, index}) => {
    const {title, icon, nav} = item;
    console.log('nav', nav);
    const handlePress = () => {
      if (title === 'LOGOUT') {
        navigation.closeDrawer();
        setTimeout(() => {
          // resetToScreen(0, routes.mainStack.auth);
          if (logoutPopRef.current) {
            logoutPopRef.current.open();
          }
        }, 400);
      } else if (item?.browser) {
        navigation.closeDrawer();
        Linking.openURL(item?.browser);
      } else {
        navigation.closeDrawer();
        navigation.navigate(nav);
      }
    };

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePress}
          style={[styles.menuItem]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing.xsmall,
            }}>
            <View style={{paddingVertical: spacing.small}}>
              <MyIcons name={icon} size={50} />
            </View>
            <CustomText
              style={styles.menuItemText}
              text={title}
              font={fonts.g.regular}
            />
          </View>
          {/* <CustomIcon
            src={appIcons.rightArrow}
            size={14}
            tintColor={colors.description}
          /> */}
        </TouchableOpacity>
        {item?.title == 'Privacy Policy' && (
          <></>
          //   <CustomButton
          //     size={'medium'}
          //     title={'Logout'}
          //     onPress={() => {
          //       dispatch(logoutUser());
          //     }}
          //     buttonStyles={{alignSelf: 'center', marginTop: HP(1)}}
          //   />
        )}
      </View>
    );
  };

  const userInfo = useSelector(({auth}) => auth?.user);
  console.log('userInfo', userInfo);

  return (
    <Background>
      <View style={[styles.container]}>
        <View style={styles?.tophead}>
          <View style={{flex: 1}} />
          <CustomText text="Menu" font={fonts.m.extrabold} style={{flex: 1}} />
          <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{}}>
            <MyIcons name={'close'} size={50} />
          </TouchableOpacity>
        </View>

        <Animated.View style={styles.header}>
          {/* <FastImage
            source={appImages?.profile1}
            style={styles?.profileStyles}
          /> */}
          <View style={styles?.profileStyles}>
            <CustomText
              text={userInfo?.firstName.charAt(0).toUpperCase()}
              size={font?.xxlarge}
            />
          </View>

          <CustomText
            text={`${userInfo?.firstName} ${userInfo?.lastName}`}
            font={fonts.e.semibold}
            style={{fontSize: font?.large}}
          />
          <CustomText
            text={userInfo?.email}
            font={fonts.q.regular}
            style={{fontSize: font?.medium}}
            color={colors.text.placeholder}
          />
        </Animated.View>
        <View style={{marginTop: spacing.medium, gap: spacing.medium}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            renderItem={renderItem}
            contentContainerStyle={{flexGrow: 1}}
            ItemSeparatorComponent={() => (
              <View style={{height: spacing.medium}} />
            )}
            style={{maxHeight: vh * 68}}
          />
          {/* <MainButton
            title={'Logout'}
            style={{width: vw * 90}}
            onPress={() => resetToScreen(0, routes.mainStack.auth)}
          /> */}
        </View>
        <BottomSheet
          togglePopup={logoutPopRef}
          alertPopup={true}
          onBackButtonPress={handleCloseModal}
          modalHeight={vh * 45}
          onBackdropPress={handleCloseModal}
          onPress={handleSuccessModal}
          label={'Logout'}
          description={`Are you sure you want to logout?`}
          onPressYes={onPressYes}
          onPressNo={onPressNo}
        />
      </View>
    </Background>
  );
};

export default DrawerComp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.small,
    marginTop: spacing.large,
    // flex: 1,
  },
  profileName: {
    color: colors.text.dimBlack,
    marginLeft: 10,
  },
  profileEmail: {
    color: colors.white,
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors?.background.drawerbg,
    paddingHorizontal: spacing.large,
    borderRadius: layout.borderRadius,
  },
  menuItemText: {
    marginLeft: spacing.medium,
    color: colors?.text.white,
    fontSize: font?.medium,
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    borderColor: colors.progressBg,
  },
  profileStyles: {
    height: vw * 14,
    width: vw * 14,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors?.background?.background,
    borderWidth: 1,
    borderColor: colors?.text?.white,
  },
  tophead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.medium,
    alignItems: 'center',
  },
});
