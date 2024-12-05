import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Keyboard, Platform, View} from 'react-native';
import Animated, {
  BounceIn,
  Easing,
  FadeOut,
  SlideInLeft,
  StretchInX,
} from 'react-native-reanimated';
import {useLoginMutation} from '../../../Api/authApiSlice';
import fonts from '../../../Assets/fonts';
import ActivityLoader from '../../../Components/ActivityLoader';
import AuthTextButton from '../../../Components/AuthTextButton';
import Background from '../../../Components/Background';
import MainButton from '../../../Components/Buttons/MainButton';
import TextButton from '../../../Components/Buttons/TextButton';
import Container from '../../../Components/Container';
import InputField from '../../../Components/InputField';
import MyIcons from '../../../Components/MyIcons';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import {useResetToScreen} from '../../../Functions/resetToScreen';
import routes from '../../../Navigation/routes';
import {colors} from '../../../theme/colors';
import {font, layout, spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import {loginValidationSchema} from '../../../Validations/authValidations';
import styles from './styles'; // Import styles from styles.js
import {makeApiCall} from '../../../Utils/helperFunctions';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {resetToScreen} = useResetToScreen();
  const [login, {isLoading, error}] = useLoginMutation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const navigateToSignUp = () => navigation.navigate(routes.auth.signup);

  const handleLogin = async data => {
    Keyboard.dismiss();
    await makeApiCall(login, {
      email: data?.email,
      password: data?.password,
    });
  };

  const navigateToForgotPassword = () =>
    navigation.navigate(routes.auth.forgot);

  const handlePopToTop = () => {
    navigation.navigate(routes.auth.welcome);
  };

  return (
    <View style={layout.flex}>
      <Background>
        <Container
          keyboardAware
          keyboardHandled={'handled'}
          contentContainerStyle={styles.mainContentContainer}>
          <Animated.View
            exiting={StretchInX.duration(600).easing(Easing.bounce)}
            entering={StretchInX.duration(600).easing(Easing.bounce)}>
            <MyIcons name={'logo'} size={spacing.xxxlargex} />
          </Animated.View>
          <Animated.View
            exiting={FadeOut.duration(600)}
            entering={BounceIn.duration(300)}>
            <CustomText
              text={'Hello Again!'}
              font={fonts.m.extrabold}
              size={font.xxlarge}
            />
          </Animated.View>

          <View style={{margin: vh * 1}} />

          <Animated.View
            exiting={FadeOut.duration(600)}
            entering={SlideInLeft.duration(300)}>
            <CustomText
              text={'Enter your credentials to sign in to this platform'}
              font={fonts.q.regular}
            />
          </Animated.View>

          <View>
            <Formik
              initialValues={{
                email: '',
                password: '',
                role: 'USER',
                //   deviceId: deviceId,
                deviceType: Platform.OS === 'ios' ? 'ios' : 'android',
              }}
              validationSchema={loginValidationSchema}
              validateOnChange={validateAfterSubmit}
              validateOnBlur={validateAfterSubmit}
              onSubmit={values => handleLogin(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                isValid,
                values,
              }) => {
                return (
                  <View style={styles.contentContainer}>
                    <InputField
                      placeholder="Enter Email"
                      required
                      onChangeText={handleChange('email')}
                      errors={errors?.email}
                      value={values?.email}
                      keyboardType={'email-address'}
                      leftIcon={'mail'}
                    />
                    <InputField
                      placeholder="Enter Password"
                      onChangeText={handleChange('password')}
                      required
                      password
                      errors={errors?.password}
                      value={values?.password}
                      returnKeyType={'done'}
                      leftIcon={'key'}
                    />
                    <View style={[styles.rememberRow]}>
                      {/* <CheckBox
                        text="Remember Me"
                        checked={checked}
                        setChecked={setChecked}
                      /> */}
                      <TextButton
                        style={styles.forgotText}
                        title={'Forgot Password?'}
                        onPress={navigateToForgotPassword}
                        underLine={true}
                      />
                    </View>

                    {isLoading ? (
                      <ActivityLoader
                        style={styles.submitButton}
                        color={colors.theme.secondary}
                      />
                    ) : (
                      <MainButton
                        style={styles.submitButton}
                        title={'Login'}
                        disabled={!isValid}
                        onPress={() => {
                          setValidateAfterSubmit(true);
                          handleSubmit();
                        }}
                      />
                    )}
                  </View>
                );
              }}
            </Formik>
          </View>
          <View style={{alignItems: 'center'}}>
            <AuthTextButton
              text={'New Member?'}
              buttonText="Register Now"
              underLine={true}
              onPress={navigateToSignUp}
            />
          </View>
        </Container>
      </Background>
    </View>
  );
};

export default LoginScreen;
