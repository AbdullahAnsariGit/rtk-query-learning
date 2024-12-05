// import React from 'react';
// import {
//   View,
//   TouchableOpacity,
//   ImageBackground,
//   Animated,
//   StyleSheet,
// } from 'react-native';
// import {appImages} from '../../../Assets/Images';
// import CustomText from '../../wrappers/Texts/CustomText';
// import fonts from '../../../Assets/fonts';
// import MyIcons from '../../MyIcons';
// import MainButton from '../../Buttons/MainButton';
// import {spacing} from '../../../theme/styles';
// import {vh} from '../../../theme/units';
// import {formatDate} from '../../../Utils/helperFunctions';
// import {imageServer} from '../../../Api/configs';

// const RaffleCard = ({raffle, onPress, sharedTransitionTag, buyPress}) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={styles.cardContainer}
//       activeOpacity={0.8}>
//       <ImageBackground
//         source={appImages?.cardBg}
//         style={styles.imageBackground}
//         resizeMode="contain">
//         <Animated.Image
//           source={{uri: imageServer + raffle.image}}
//           style={styles.raffleImage}
//           resizeMode="cover"
//           sharedTransitionTag={sharedTransitionTag}
//         />
//         <View style={styles.detailsContainer}>
//           <CustomText text={raffle.title} font={fonts.m.regular} />
//           <View style={styles.row}>
//             <MyIcons name="win" size={18} />
//             <CustomText
//               text={`Price Worth - ${raffle.prize}`}
//               font={fonts.q.regular}
//             />
//           </View>
//           <View style={styles.row}>
//             <MyIcons name="time" size={18} />
//             <CustomText
//               text={`Drawn - ${formatDate(raffle.endDate)}`}
//               font={fonts.q.regular}
//             />
//           </View>
//         </View>
//         <View style={styles.buttonContainer}>
//           <MainButton
//             title="Buy Ticket Now"
//             style={styles.mainButton}
//             onPress={buyPress}
//           />
//         </View>
//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     marginBottom: spacing.medium,
//   },
//   imageBackground: {
//     height: 355,
//     paddingHorizontal: spacing.small,
//     paddingVertical: spacing.small,
//     position: 'relative',
//   },
//   raffleImage: {
//     height: vh * 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     width: '100%',
//   },
//   detailsContainer: {
//     paddingHorizontal: spacing.large,
//     gap: spacing.medium,
//     paddingVertical: spacing.small,
//   },
//   row: {
//     flexDirection: 'row',
//     gap: spacing.small,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 10,
//     width: '100%',
//     alignSelf: 'center',
//   },
//   mainButton: {
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     width: '100%',
//   },
// });

// export default RaffleCard;

import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  StyleSheet,
} from 'react-native';
import {appImages} from '../../../Assets/Images';
import CustomText from '../../wrappers/Texts/CustomText';
import fonts from '../../../Assets/fonts';
import MyIcons from '../../MyIcons';
import MainButton from '../../Buttons/MainButton';
import {spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import {formatDate} from '../../../Utils/helperFunctions';
import {imageServer} from '../../../Api/configs';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder'; // Importing shimmer
import LinearGradient from 'react-native-linear-gradient';

const RaffleCard = ({
  raffle,
  onPress,
  sharedTransitionTag,
  buyPress,
  isLoading,
}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.cardContainer}
      activeOpacity={0.8}>
      <ImageBackground
        source={appImages?.cardBg}
        style={styles.imageBackground}
        resizeMode="contain">
        {/* Shimmer for image */}
        <ShimmerPlaceholder visible={!isLoading} style={styles.raffleImage}>
          <Animated.Image
            source={{uri: imageServer + raffle.image}}
            style={styles.raffleImage}
            resizeMode="cover"
            sharedTransitionTag={sharedTransitionTag}
          />
        </ShimmerPlaceholder>

        <View style={styles.detailsContainer}>
          <CustomText text={raffle.title} font={fonts.m.regular} />

          {/* Shimmer for Prize */}
          <ShimmerPlaceholder
            visible={!isLoading}
            style={[styles.row, {width: '60%'}]}>
            <View style={styles.row}>
              <MyIcons name="win" size={18} />
              <CustomText
                text={`Price Worth - ${raffle.prize}`}
                font={fonts.q.regular}
              />
            </View>
          </ShimmerPlaceholder>

          {/* Shimmer for Drawn Date */}
          <ShimmerPlaceholder
            visible={!isLoading}
            style={[styles.row, {width: '60%'}]}>
            <View style={styles.row}>
              <MyIcons name="time" size={18} />
              <CustomText
                text={`Drawn - ${formatDate(raffle.endDate)}`}
                font={fonts.q.regular}
              />
            </View>
          </ShimmerPlaceholder>
        </View>

        {/* Shimmer for button */}
        <View style={styles.buttonContainer}>
          <MainButton
            title="Buy Ticket Now"
            style={styles.mainButton}
            onPress={buyPress}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: spacing.medium,
  },
  imageBackground: {
    height: 355,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.small,
    position: 'relative',
  },
  raffleImage: {
    height: vh * 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  detailsContainer: {
    paddingHorizontal: spacing.large,
    gap: spacing.medium,
    paddingVertical: spacing.small,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.small,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
  mainButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
  },
});

export default RaffleCard;
