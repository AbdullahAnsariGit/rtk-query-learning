import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Animated, {FadeInUp, FadeOut} from 'react-native-reanimated'; // Import Reanimated animations
import {vh} from '../../../theme/units';
import CustomText from '../../wrappers/Texts/CustomText';
import {font, spacing} from '../../../theme/styles';
import {colors} from '../../../theme/colors';
import fonts from '../../../Assets/fonts';

const ChatListCard = ({
  item,
  onPress,
  name,
  message,
  time,
  unreadCount,
  profileImage,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        entering={FadeInUp.duration(200)}
        exiting={FadeOut.duration(200)}
        style={styles.container}>
        <View style={styles.profileWrap}>
          {profileImage ? (
            <FastImage source={profileImage} style={styles?.profileImg} />
          ) : (
            <CustomText
              text={name?.charAt(0).toUpperCase()}
              size={font?.xxlarge}
            />
          )}
        </View>
        <View style={styles.middle}>
          <View style={styles.titleWrap}>
            <CustomText text={name} font={fonts.e.medium} size={font.large} />
            {unreadCount > 0 && (
              <View style={styles.chatCount}>
                <CustomText
                  text={unreadCount.toString()}
                  font={fonts.q.regular}
                  size={font.xxsmall}
                />
              </View>
            )}
          </View>
          {message && (
            <CustomText
              text={message}
              font={fonts.q.regular}
              size={font.medium}
            />
          )}
        </View>
        <View>
          <CustomText text={time} font={fonts.q.regular} size={font.medium} />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ChatListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.medium,
    gap: spacing.medium,
    alignItems: 'center',
  },
  profileImg: {
    height: '100%',
    width: '100%',
  },
  profileWrap: {
    backgroundColor: colors?.theme?.secondary,
    height: vh * 8,
    width: vh * 8,
    borderRadius: vh * 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 1,
    gap: spacing.small,
  },
  titleWrap: {
    flexDirection: 'row',
    gap: spacing.small,
  },
  chatCount: {
    padding: spacing.small,
    backgroundColor: colors?.theme.secondary,
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
