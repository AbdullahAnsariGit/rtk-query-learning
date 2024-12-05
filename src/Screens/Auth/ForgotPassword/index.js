// import React, {useRef, useState} from 'react';
// import {Platform, View} from 'react-native';

// import {useNavigation} from '@react-navigation/native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import AuthTextButton from '../../../Components/AuthTextButton';
// import MainButton from '../../../Components/Buttons/MainButton';
// import Container from '../../../Components/Container';
// import InputField from '../../../Components/InputField';
// import routes from '../../../Navigation/routes';
// import {font, layout} from '../../../theme/styles';
// import styles from './styles';

// import Animated, {
//   BounceIn,
//   FadeOut,
//   SlideInLeft,
// } from 'react-native-reanimated';
// import fonts from '../../../Assets/fonts';
// import Background from '../../../Components/Background';
// import BottomSheet from '../../../Components/BottomSheet';
// import TopLeftBackButton from '../../../Components/Buttons/TopLeftBackButton';
// import CustomText from '../../../Components/wrappers/Texts/CustomText';
// import {useResetToLoginScreen} from '../../../Functions/resetToScreen';
// import {vh} from '../../../theme/units';
// import OTPInput from './OTPInput';
// import {useVerifyEmailMutation} from '../../../Api/resetPassApiSlice';

// const getSubTitle = step => {
//   switch (step) {
//     case 1:
//       return `Enter your email to recover your account`;
//     case 2:
//       return `Enter verification code sent to your email.`;
//     default:
//       return `Set new password for your account.`;
//   }
// };

// const Header = ({step}) => {
//   const insets = useSafeAreaInsets();
//   return (
//     <View
//       style={[
//         styles.headerContainer,
//         Platform.OS === 'ios' && {paddingTop: insets.top},
//       ]}></View>
//   );
// };

// const ForgotPassword = () => {
//   const navigation = useNavigation();
//   const {resetToLoginScreen} = useResetToLoginScreen();
//   const [verifyEmail, {isLoading}] = useVerifyEmailMutation();
//   const [step, setStep] = useState(1);
//   const [visible, setVisible] = useState(false);
//   const [email, setEmail] = useState();
//   const [code, setCode] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPass, setConfirmPass] = useState();

//   const sheetRef = useRef(null);

//   //   const dispatch = useDispatch();

//   const handleSubmit = () => {
//     switch (step) {
//       case 1:
//         return handleEmailStep();
//       case 2:
//         return handleCodeStep();
//       case 3:
//         return handleChangePassStep();
//     }
//   };

//   const passUpdateSuccess = () => {
//     if (sheetRef.current) {
//       sheetRef.current.close();
//     }
//   };

//   const onBackdropPress = () => {
//     if (sheetRef.current) {
//       sheetRef.current.close();
//     }
//     handleVisibility();
//     resetToLoginScreen();
//   };

//   const handleEmailStep = async () => {
//     // if (email == '') {}
//     // setStep(prevStep => prevStep + 1);
//     await verifyEmail().unwrap();
//   };

//   const handleCodeStep = () => {
//     setStep(prevStep => prevStep + 1);
//   };

//   const handleChangePassStep = () => {
//     if (sheetRef.current) sheetRef.current.open();
//   };

//   const navigateToLogin = () => navigation.navigate(routes.auth.login);
//   // const resetToLogin = ()=> resetToScreen(1, routes.auth.login);

//   const renderSteps = () => {
//     switch (step) {
//       case 1:
//         return (
//           <InputField
//             placeholder="Enter Email"
//             keyboardType={'email-address'}
//             onChangeText={setEmail}
//             required
//             returnKeyType={'done'}
//             leftIcon={'mail'}
//           />
//         );
//       case 2:
//         return (
//           <OTPInput navigation={navigation} />
//           //   <View>
//           //     <InputField
//           //       style={styles.verificationCodeInput}
//           //       keyboardType={'number-pad'}
//           //       label="Verification Code"
//           //       onChangeText={setCode}
//           //       placeholder="Enter verification code"
//           //       required
//           //       returnKeyType={'done'}
//           //     />
//           //     <TextButton style={styles.forgotText} title={'Resend Code'} />
//           //   </View>
//         );
//       case 3:
//         return (
//           <>
//             <InputField
//               placeholder="Enter Password"
//               onChangeText={setPassword}
//               required
//               password
//             />
//             <InputField
//               onChangeText={setConfirmPass}
//               placeholder="Confirm Password"
//               required
//               password
//             />
//           </>
//         );
//       default:
//         return <></>;
//     }
//   };

//   return (
//     <View style={layout.flex}>
//       <Background>
//         <TopLeftBackButton />
//         <Container
//           keyboardAware
//           contentContainerStyle={styles.mainContentContainer}>
//           <Animated.View
//             exiting={FadeOut.duration(600)}
//             entering={BounceIn.duration(300)}>
//             <CustomText
//               text={'Forgot Password'}
//               font={fonts.m.extrabold}
//               size={font.xxlarge}
//             />
//           </Animated.View>

//           <View style={{margin: vh * 1}} />
//           <Animated.View
//             exiting={FadeOut.duration(600)}
//             entering={SlideInLeft.duration(300)}>
//             <CustomText text={getSubTitle(step)} font={fonts.q.regular} />
//           </Animated.View>
//           <View style={{margin: vh * 3}} />
//           <View style={styles.contentContainer}>
//             {renderSteps()}
//             <View style={{margin: vh * 1}} />
//             <MainButton
//               style={styles.submitButton}
//               title={step >= 3 ? 'Update' : 'Continue'}
//               onPress={handleSubmit}
//             />
//           </View>
//         </Container>
//         <View style={{alignItems: 'center'}}>
//           <AuthTextButton
//             text={'Back to?'}
//             buttonText="Sign In"
//             onPress={resetToLoginScreen}
//             underLine={true}
//           />
//         </View>

//         <BottomSheet
//           togglePopup={sheetRef}
//           successPopup={true}
//           onClose={() => resetToLoginScreen()}
//           modalHeight={vh * 40}
//           onPress={passUpdateSuccess}
//           label="System Message!"
//           description={`Your password has been successfully updated.`}
//         />
//       </Background>
//     </View>
//   );
// };

// export default ForgotPassword;

import React, {useRef, useState} from 'react';
import {Alert, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import AuthTextButton from '../../../Components/AuthTextButton';
import MainButton from '../../../Components/Buttons/MainButton';
import Container from '../../../Components/Container';
import InputField from '../../../Components/InputField';
import routes from '../../../Navigation/routes';
import {font, layout} from '../../../theme/styles';
import styles from './styles';

import Animated, {
  BounceIn,
  FadeOut,
  SlideInLeft,
} from 'react-native-reanimated';
import fonts from '../../../Assets/fonts';
import Background from '../../../Components/Background';
import BottomSheet from '../../../Components/BottomSheet';
import TopLeftBackButton from '../../../Components/Buttons/TopLeftBackButton';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import {useResetToLoginScreen} from '../../../Functions/resetToScreen';
import {vh} from '../../../theme/units';
import OTPInput from './OTPInput';
import {
  useResetPassMutation,
  useVerifyCodeMutation,
  useVerifyEmailMutation,
} from '../../../Api/resetPassApiSlice';
import {showToast} from '../../../Utils/toast';
import {LOG, makeApiCall} from '../../../Utils/helperFunctions';
import ActivityLoader from '../../../Components/ActivityLoader';
import {colors} from '../../../theme/colors';

const getSubTitle = step => {
  switch (step) {
    case 1:
      return `Enter your email to recover your account`;
    case 2:
      return `Enter verification code sent to your email.`;
    default:
      return `Set new password for your account.`;
  }
};

const Header = ({step}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.headerContainer,
        Platform.OS === 'ios' && {paddingTop: insets.top},
      ]}></View>
  );
};

const ForgotPassword = () => {
  const navigation = useNavigation();
  const {resetToLoginScreen} = useResetToLoginScreen();
  // const [verifyEmail, {isLoading}] = useVerifyEmailMutation();
  // const [verfifyCode, {isLoading}] = useVerifyCodeMutation();
  const [verifyEmail, {isLoading: isVerifyingEmail}] = useVerifyEmailMutation();
  const [verifyCode, {isLoading: isVerifyingCode}] = useVerifyCodeMutation();
  const [resetPass, {isLoading: isResetPassword}] = useResetPassMutation();

  const [step, setStep] = useState(1);

  const sheetRef = useRef(null);

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      code:
        step === 2
          ? Yup.string()
              .required('Verification code is required')
              .length(4, 'OTP must be exactly 4 digits')
          : null,
      password:
        step === 3
          ? Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Password is required')
          : null,
      confirmPassword:
        step === 3
          ? Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required')
          : null,
    }),
    onSubmit: values => {
      console.log('values-values', values);
      console.log('step-step', step);
      switch (step) {
        case 1:
          return handleEmailStep(values);
        case 2:
          return handleCodeStep(values);
        case 3:
          return handleChangePassStep(values);
      }
    },
  });

  const passUpdateSuccess = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const handleEmailStep = async values => {
    await makeApiCall(
      verifyEmail,
      {
        email: values.email,
        type: 'USER',
      },
      setStep,
    );
  };

  const handleCodeStep = async values => {
    LOG('VerifyOtp', values, 'error');
    await makeApiCall(
      verifyCode,
      {
        email: values.email,
        code: values.code,
      },
      setStep,
    );
  };

  const handleChangePassStep = async values => {
    LOG('Change-Password', values, 'success');
    let response = await makeApiCall(resetPass, {
      email: values.email,
      code: values.code,
      password: values.password,
    });
    if (response?.status) {
      if (sheetRef.current) sheetRef.current.open();
      setTimeout(() => {
        if (sheetRef.current) sheetRef.current.close();
        resetToLoginScreen();
      }, 850);
    }
  };

  const navigateToLogin = () => navigation.navigate(routes.auth.login);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <InputField
            placeholder="Enter Email"
            keyboardType={'email-address'}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            errors={formik.errors.email}
            touched={formik.touched.email}
            required
            returnKeyType={'done'}
            leftIcon={'mail'}
          />
        );
      case 2:
        return (
          <OTPInput
            navigation={navigation}
            code={formik.values.code}
            onChangeText={value => formik.setFieldValue('code', value)}
            errors={formik.errors.code}
            touched={formik.touched.code}
          />
        );
      case 3:
        return (
          <>
            <InputField
              placeholder="Enter Password"
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              errors={formik.errors.password}
              touched={formik.touched.password}
              required
              password
            />
            <InputField
              onChangeText={formik.handleChange('confirmPassword')}
              value={formik.values.confirmPassword}
              errors={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
              placeholder="Confirm Password"
              required
              password
            />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <View style={layout.flex}>
      <Background>
        <TopLeftBackButton />
        <Container
          keyboardAware
          contentContainerStyle={styles.mainContentContainer}>
          <Animated.View
            exiting={FadeOut.duration(600)}
            entering={BounceIn.duration(300)}>
            <CustomText
              text={'Forgot Password'}
              font={fonts.m.extrabold}
              size={font.xxlarge}
            />
          </Animated.View>

          <View style={{margin: vh * 1}} />
          <Animated.View
            exiting={FadeOut.duration(600)}
            entering={SlideInLeft.duration(300)}>
            <CustomText text={getSubTitle(step)} font={fonts.q.regular} />
          </Animated.View>
          <View style={{margin: vh * 3}} />
          <View style={styles.contentContainer}>
            {renderSteps()}
            <View style={{margin: vh * 1}} />
            {isVerifyingEmail || isVerifyingCode || isResetPassword ? (
              <ActivityLoader
                style={styles.submitButton}
                color={colors.theme.secondary}
              />
            ) : (
              <MainButton
                style={styles.submitButton}
                title={step >= 3 ? 'Update' : 'Continue'}
                onPress={formik.handleSubmit}
                disabled={!formik.isValid}
              />
            )}
          </View>
        </Container>
        <View style={{alignItems: 'center'}}>
          <AuthTextButton
            text={'Back to?'}
            buttonText="Sign In"
            onPress={resetToLoginScreen}
            underLine={true}
          />
        </View>

        <BottomSheet
          togglePopup={sheetRef}
          successPopup={true}
          onClose={() => resetToLoginScreen()}
          modalHeight={vh * 40}
          onPress={passUpdateSuccess}
          label="System Message!"
          description={`Your password has been successfully updated.`}
        />
      </Background>
    </View>
  );
};

export default ForgotPassword;
