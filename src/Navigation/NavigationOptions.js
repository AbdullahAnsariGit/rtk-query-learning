// import IconButton from '../../components/Buttons/IconButton';
// import MainButton from '../../components/Buttons/MainButton';
// import React from 'react';
// import {View} from 'react-native';
// import {colors} from '../../theme/colors';
// import {header} from '../../theme/styles';
// import images from '../../assets/images';

// import styles from './styles';

// import routes from './routes';

// const noHeaderRoutes = [
//   routes.navigator.auth,
//   routes.navigator.plan,
//   // routes.navigator.tab,
//   routes.auth.login,
//   routes.auth.signup,
//   routes.auth.forgotPassword,
// ];

// const backButtonRoutes = [
//   routes.plan.planDetail,
//   routes.plan.paymentMethod,
//   routes.post.createPost,
//   routes.post.tagPeople,
//   routes.post.addEmotion,
//   routes.settings.savedPosts,
// ];

// const searchRoutes = [routes.tab.home, routes.settings.contactUs];

// const titleRoutes = {
//   [routes.plan.subscriptionPlan]: 'Subscription Plan',
//   [routes.plan.planDetail]: 'Plan Detail',
//   [routes.plan.paymentMethod]: 'Payment Method',
//   [routes.tab.home]: 'Home',
//   [routes.post.createPost]: 'Create Post',
//   [routes.post.tagPeople]: 'Tag People',
//   [routes.post.addEmotion]: 'Add Emotion',
//   [routes.settings.savedPosts]: 'Saved Post',
// };

// const subtitleRoutes = {
//   [routes.plan.paymentMethod]:
//     'Enter your credit card details to proceed with payment',
// };

// const getHeaderStyle = routeName => {
//   return {
//     height: header.authHeight,
//     backgroundColor: colors.theme.primary,
//   };
// };

// const getTitle = routeName => {
//   return titleRoutes[routeName] ? (
//     <View style={{flexDirection: 'column'}}>
//       <EuclidCircularAMedium
//         style={styles.title}
//         text={titleRoutes[routeName]}
//       />
//       {subtitleRoutes[routeName] && (
//         <EuclidCircularALight
//           style={styles.subTitle}
//           text={subtitleRoutes[routeName]}
//         />
//       )}
//     </View>
//   ) : null;
// };

// const getHeaderLeft = (routeName, goBack) => {
//   return backButtonRoutes.includes(routeName) ? (
//     <IconButton
//       onPress={goBack}
//       icon={images.icons.back}
//       iconStyle={styles.backIcon}
//     />
//   ) : null;
// };

// const getHeaderRight = routeName => {
//   if (searchRoutes.includes(routeName))
//     return (
//       <IconButton
//         icon={images.icons.search}
//         style={styles.searchBtnContainer}
//       />
//     );
//   if (routeName == routes.post.createPost)
//     return <MainButton title={'Post'} style={styles.postBtn} />;
//   return null;
// };

const NavigationOptions = () => {
  return {headerShown: false, animation: 'slide_from_bottom'};
};

export default NavigationOptions;
