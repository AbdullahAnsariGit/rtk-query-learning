import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import Svg, {G, Mask, Path, Rect} from 'react-native-svg';
import routes from '../../Navigation/routes';
import {colors} from '../../theme/colors';
import {font, spacing} from '../../theme/styles';
import {vw} from '../../theme/units';
import MyIcons from '../MyIcons';
import PlusJakartaSemiBold from '../wrappers/Texts/PlusJakartaSemiBold';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const handlePress = routeName => {
    if (routeName === 'tabbar4') return;
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  };

  return (
    <>
      <View style={styles.tabbarContainer}>
        <View style={{bottom: 0, position: 'absolute'}}>
          <Svg
            width={vw * 100}
            height="86"
            viewBox="0 0 393 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G>
              <Mask
                id="path-1-outside-1_83_13923"
                maskUnits="userSpaceOnUse"
                x="-1"
                y="0"
                width="395"
                height="86"
                fill="black">
                <Rect fill="white" x="-1" width="395" height="86" />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M151.051 1H18C8.05888 1 0 9.05888 0 19V76H393V19C393 9.05887 384.941 1 375 1L230.949 1C225.475 17.8329 209.659 30 191 30C172.341 30 156.525 17.8329 151.051 1Z"
                  fill="white"
                  fillOpacity="0.15"
                />
              </Mask>
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M151.051 1H18C8.05888 1 0 9.05888 0 19V76H393V19C393 9.05887 384.941 1 375 1L230.949 1C225.475 17.8329 209.659 30 191 30C172.341 30 156.525 17.8329 151.051 1Z"
                fill="#28282b"
                stroke="#353538"
                strokeWidth="2"
              />
              <Path
                d="M151.051 1L152.002 0.69075L151.777 0H151.051V1ZM0 76H-1V77H0V76ZM393 76V77H394V76H393ZM375 1V2V1ZM230.949 1V0H230.223L229.998 0.69075L230.949 1ZM18 2H151.051V0H18V2ZM1 19C1 9.61116 8.61116 2 18 2V0C7.50659 0 -1 8.50659 -1 19H1ZM1 76V19H-1V76H1ZM393 75H0V77H393V75ZM392 19V76H394V19H392ZM375 2C384.389 2 392 9.61116 392 19H394C394 8.50659 385.493 0 375 0V2ZM230.949 2H375V0H230.949V2ZM229.998 0.69075C224.654 17.1239 209.213 29 191 29V31C210.104 31 226.296 18.5419 231.9 1.30925L229.998 0.69075ZM191 29C172.787 29 157.346 17.1239 152.002 0.69075L150.1 1.30925C155.704 18.5419 171.896 31 191 31V29Z"
                fill="white"
                fillOpacity="0.2"
                mask="url(#path-1-outside-1_83_13923)"
              />
            </G>
          </Svg>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.middleTab}
          onPress={() => navigation.navigate(routes.main.createNewJournal)}>
          <MyIcons name={'add'} color="transparent" size={32} />
        </TouchableOpacity>
        <View style={styles.tabsWrapper}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => handlePress(route.name);

            let imageSrc;
            if (route.name === routes?.tab?.home) imageSrc = 'home';
            if (route.name === routes?.tab?.chatList) imageSrc = 'chat';

            if (route.name === 'tabBar4') {
              return <View key={index + 1} style={styles.tabs} />;
            }

            let routeNames;
            if (route.name === routes?.tab?.home) routeNames = 'HOME';
            if (route.name === routes?.tab?.chatList) routeNames = 'CHAT';

            let imageFocusSrc;
            if (route.name === routes?.tab?.home) imageFocusSrc = 'home';
            if (route.name === routes?.tab?.chatList) imageFocusSrc = 'chat';
            return (
              <TouchableOpacity
                key={index + 1}
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityRole="button"
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.tabs}>
                {isFocused && (
                  <View
                    style={{
                      height: 5,
                      width: 56,
                      backgroundColor: 'red',
                      borderRadius: 10,
                      marginBottom: spacing.medium,
                    }}
                  />
                )}
                {!isFocused && <View style={{marginTop: spacing.medium + 5}} />}
                <MyIcons
                  name={isFocused ? imageFocusSrc : imageSrc}
                  color="transparent"
                />
                <PlusJakartaSemiBold
                  text={routeNames}
                  style={[
                    styles?.tabsText,
                    {
                      color: colors?.text?.white,
                    },
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabbarContainer: {
    marginBottom: -2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  tabsWrapper: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'space-around',
    gap: 20,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 80,
    gap: 4,
    paddingBottom: spacing.small,
  },
  line: {
    width: 40,
    height: 4,
    backgroundColor: '#368196',
    borderRadius: 10,
    bottom: 6,
    position: 'absolute',
  },
  tabsText: {
    fontSize: font?.small,
  },
  middleTab: {
    backgroundColor: colors?.theme?.secondary,
    width: vw * 16,
    height: vw * 16,
    borderRadius: vw * 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 62,
    right: '40%',
    left: '40.50%',
  },
});

export default TabBar;
