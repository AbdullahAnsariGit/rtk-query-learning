// import {useNavigation} from '@react-navigation/native';
// import {Formik} from 'formik';
// import React, {useRef, useState} from 'react';
// import {Keyboard, Platform, View} from 'react-native';
// import Animated, {FadeOut, SlideInUp} from 'react-native-reanimated';
// import fonts from '../../../Assets/fonts';
// import ActivityLoader from '../../../Components/ActivityLoader';
// import AuthTextButton from '../../../Components/AuthTextButton';
// import Background from '../../../Components/Background';
// import BottomSheet from '../../../Components/BottomSheet';
// import MainButton from '../../../Components/Buttons/MainButton';
// import TopLeftBackButton from '../../../Components/Buttons/TopLeftBackButton';
// import Container from '../../../Components/Container';
// import InputField from '../../../Components/InputField';
// import CustomText from '../../../Components/wrappers/Texts/CustomText';
// import {useResetToLoginScreen} from '../../../Functions/resetToScreen';
// import {font, layout} from '../../../theme/styles';
// import {vh} from '../../../theme/units';
// import {signupValidationSchema} from '../../../Validations/authValidations';
// import styles from './styles'; // Import styles from styles.js
// import {useRegisterMutation} from '../../../Api/authApiSlice';
// import DropDown from '../../../Components/DropDown';
// import {appImages} from '../../../Assets/Images';

// const SignupScreen = () => {
//   const navigation = useNavigation();
//   const {resetToLoginScreen} = useResetToLoginScreen();
//   const [registration, {isLoading, error}] = useRegisterMutation();

//   const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
//   const [visible, setVisible] = useState(false);

//   const sheetRef = useRef(null);

//   // console.log('registration-registration', registration);
//   // console.log('isLoading-isLoading', isLoading);
//   // console.log('error-error', error);

//   const handleVisibility = () => setVisible(!visible);

//   const passUpdateSuccess = async () => {
//     if (sheetRef.current) {
//       sheetRef.current.close();
//     }
//   };

//   const handleSignupData = async data => {
//     Keyboard.dismiss();

//     console.log('data-dat', data);
//     const response = await registration({
//       firstName: data?.firstName,
//       lastName: data?.lastName,
//       gender: data?.gender,
//       isAdmin: false,
//       email: data?.email,
//       password: data?.password,
//     }).unwrap();

//     console.log('response', response);
//     // if (sheetRef.current) {
//     //   sheetRef.current.open();
//     // }
//     // handleVisibility();
//   };

//   return (
//     <View style={layout.flex}>
//       <Background>
//         <TopLeftBackButton />
//         <Container
//           keyboardAware
//           keyboardHandled={'handled'}
//           contentContainerStyle={styles.mainContentContainer}>
//           <Animated.View
//             exiting={FadeOut.duration(600)}
//             entering={SlideInUp.duration(300)}>
//             <CustomText
//               text={'Register'}
//               font={fonts.m.extrabold}
//               size={font.xxlarge}
//             />
//           </Animated.View>

//           <View style={{margin: vh * 1}} />

//           <Animated.View
//             exiting={FadeOut.duration(600)}
//             entering={SlideInUp.duration(300)}>
//             <CustomText
//               text={'Fill out this form to register'}
//               font={fonts.q.regular}
//             />
//           </Animated.View>
//           <View>
//             <Formik
//               initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 gender: '',
//                 password: '',
//                 confirmPassword: '',
//               }}
//               validationSchema={signupValidationSchema}
//               validateOnChange={true}
//               validateOnBlur={true}
//               onSubmit={values => handleSignupData(values)}>
//               {({
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 errors,
//                 isValid,
//                 values,
//               }) => {
//                 console.log('isvalidd', isValid);
//                 return (
//                   <View style={styles.contentContainer}>
//                     <InputField
//                       placeholder="Enter your first name"
//                       required
//                       onChangeText={handleChange('firstName')}
//                       errors={errors?.firstName}
//                       value={values?.firstName}
//                       leftIcon={'user'}
//                     />
//                     <InputField
//                       placeholder="Enter your last name"
//                       required
//                       onChangeText={handleChange('lastName')}
//                       errors={errors?.lastName}
//                       value={values?.lastName}
//                       leftIcon={'user'}
//                     />

//                     <InputField
//                       placeholder="Enter Email"
//                       required
//                       onChangeText={handleChange('email')}
//                       errors={errors?.email}
//                       value={values?.email}
//                       keyboardType={'email-address'}
//                       leftIcon={'mail'}
//                     />
//                     <DropDown
//                       placeholder={'Select gender'}
//                       options={[
//                         {key: 0, value: 'MALE'},
//                         {key: 1, value: 'FEMALE'},
//                       ]}
//                       leftIcon={appImages?.user}
//                       callback={value => console.log('value-value', value)} // inside value dropdown slected value 0 and 1
//                     />
//                     <InputField
//                       placeholder="Enter Password"
//                       onChangeText={handleChange('password')}
//                       required
//                       password
//                       errors={errors?.password}
//                       value={values?.password}
//                       returnKeyType={'done'}
//                       leftIcon={'key'}
//                     />
//                     <InputField
//                       placeholder="Enter Password"
//                       onChangeText={handleChange('confirmPassword')}
//                       required
//                       password
//                       errors={errors?.confirmPassword}
//                       value={values?.confirmPassword}
//                       returnKeyType={'done'}
//                       leftIcon={'key'}
//                     />
//                     {false ? (
//                       <ActivityLoader style={styles.submitButton} />
//                     ) : (
//                       <MainButton
//                         style={styles.submitButton}
//                         title={'Register Now'}
//                         disabled={!isValid}
//                         onPress={() => {
//                           setValidateAfterSubmit(true);
//                           handleSubmit();
//                         }}
//                       />
//                     )}
//                   </View>
//                 );
//               }}
//             </Formik>
//           </View>
//         </Container>
//         <View style={{alignItems: 'center'}}>
//           <AuthTextButton
//             text={'Already have an account?'}
//             buttonText="Sign In"
//             underLine={true}
//             onPress={resetToLoginScreen}
//           />
//         </View>
//         <BottomSheet
//           togglePopup={sheetRef}
//           successPopup={true}
//           modalHeight={vh * 45}
//           onPress={passUpdateSuccess}
//           onClose={() => resetToLoginScreen()}
//           label="Register Successfully"
//           description={`Your account has been created successfully.`}
//           btnTitle={'Continue'}
//         />
//       </Background>
//     </View>
//   );
// };

// export default SignupScreen;

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {Keyboard, View} from 'react-native';
import Animated, {FadeOut, SlideInUp} from 'react-native-reanimated';
import fonts from '../../../Assets/fonts';
import ActivityLoader from '../../../Components/ActivityLoader';
import AuthTextButton from '../../../Components/AuthTextButton';
import Background from '../../../Components/Background';
import BottomSheet from '../../../Components/BottomSheet';
import MainButton from '../../../Components/Buttons/MainButton';
import TopLeftBackButton from '../../../Components/Buttons/TopLeftBackButton';
import Container from '../../../Components/Container';
import InputField from '../../../Components/InputField';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import {useResetToLoginScreen} from '../../../Functions/resetToScreen';
import {font, layout} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import {signupValidationSchema} from '../../../Validations/authValidations';
import styles from './styles'; // Import styles from styles.js
import {useRegisterMutation} from '../../../Api/authApiSlice';
import DropDown from '../../../Components/DropDown';
import {appImages} from '../../../Assets/Images';
import routes from '../../../Navigation/routes';
import {makeApiCall} from '../../../Utils/helperFunctions';

const SignupScreen = () => {
  const navigation = useNavigation();
  const {resetToLoginScreen} = useResetToLoginScreen();
  const [registration, {isLoading, error}] = useRegisterMutation();
  const sheetRef = useRef(null);

  const handleSignupData = async data => {
    Keyboard.dismiss();
    let res = await makeApiCall(registration, {
      firstName: data?.firstName,
      lastName: data?.lastName,
      gender: data?.gender,
      isAdmin: false,
      email: data?.email,
      password: data?.password,
    });
    if (res.status) {
      navigation.navigate(routes.auth.login);
    }
  };
  const options = [
    {key: 0, value: 'MALE'},
    {key: 1, value: 'FEMALE'},
  ];
  return (
    <View style={layout.flex}>
      <Background>
        <TopLeftBackButton />
        <Container
          keyboardAware
          keyboardHandled={'handled'}
          contentContainerStyle={styles.mainContentContainer}>
          <Animated.View
            exiting={FadeOut.duration(600)}
            entering={SlideInUp.duration(300)}>
            <CustomText
              text={'Register'}
              font={fonts.m.extrabold}
              size={font.xxlarge}
            />
          </Animated.View>

          <View style={{margin: vh * 1}} />

          <Animated.View
            exiting={FadeOut.duration(600)}
            entering={SlideInUp.duration(300)}>
            <CustomText
              text={'Fill out this form to register'}
              font={fonts.q.regular}
            />
          </Animated.View>
          <View>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                gender: '', // Initialize gender
                password: '',
                confirmPassword: '',
              }}
              validationSchema={signupValidationSchema}
              validateOnChange={true}
              validateOnBlur={true}
              onSubmit={values => handleSignupData(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
                isValid,
                values,
                setFieldValue,
              }) => {
                return (
                  <View style={styles.contentContainer}>
                    <InputField
                      placeholder="Enter your first name"
                      required
                      onChangeText={handleChange('firstName')}
                      errors={touched.firstName && errors?.firstName}
                      value={values?.firstName}
                      leftIcon={'user'}
                    />
                    <InputField
                      placeholder="Enter your last name"
                      required
                      onChangeText={handleChange('lastName')}
                      errors={touched.lastName && errors?.lastName}
                      value={values?.lastName}
                      leftIcon={'user'}
                    />

                    <InputField
                      placeholder="Enter Email"
                      required
                      onChangeText={handleChange('email')}
                      errors={touched.email && errors?.email}
                      value={values?.email}
                      keyboardType={'email-address'}
                      leftIcon={'mail'}
                    />

                    {/* DropDown Integration */}
                    <DropDown
                      placeholder={'Select gender'}
                      options={options}
                      leftIcon={appImages?.user}
                      value={values?.gender} // Bind value to Formik
                      callback={value =>
                        setFieldValue('gender', options[value].value)
                      } // Update Formik field
                      errors={touched?.gender && errors?.gender}
                    />

                    <InputField
                      placeholder="Enter Password"
                      onChangeText={handleChange('password')}
                      required
                      password
                      errors={touched.password && errors?.password}
                      value={values?.password}
                      returnKeyType={'done'}
                      leftIcon={'key'}
                    />
                    <InputField
                      placeholder="Confirm Password"
                      onChangeText={handleChange('confirmPassword')}
                      required
                      password
                      errors={
                        touched.confirmPassword && errors?.confirmPassword
                      }
                      value={values?.confirmPassword}
                      returnKeyType={'done'}
                      leftIcon={'key'}
                    />
                    {isLoading ? (
                      <ActivityLoader style={styles.submitButton} />
                    ) : (
                      <MainButton
                        style={styles.submitButton}
                        title={'Register Now'}
                        disabled={!isValid}
                        onPress={handleSubmit}
                      />
                    )}
                  </View>
                );
              }}
            </Formik>
          </View>
        </Container>
        <View style={{alignItems: 'center'}}>
          <AuthTextButton
            text={'Already have an account?'}
            buttonText="Sign In"
            underLine={true}
            onPress={resetToLoginScreen}
          />
        </View>
        <BottomSheet
          togglePopup={sheetRef}
          successPopup={true}
          modalHeight={vh * 45}
          onPress={() => resetToLoginScreen()}
          label="Register Successfully"
          description={`Your account has been created successfully.`}
          btnTitle={'Continue'}
        />
      </Background>
    </View>
  );
};

export default SignupScreen;
