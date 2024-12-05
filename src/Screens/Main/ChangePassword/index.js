import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {Alert, Keyboard, View} from 'react-native';
import * as Yup from 'yup';
import MainButton from '../../../Components/Buttons/MainButton';
import Container from '../../../Components/Container';
import InputField from '../../../Components/InputField';
import {layout} from '../../../theme/styles';
import styles from './styles';
import CustomHeader from '../../../Components/CustomHeader';
import routes from '../../../Navigation/routes';
import Background from '../../../Components/Background';
import BottomSheet from '../../../Components/BottomSheet';
import {useResetToScreen} from '../../../Functions/resetToScreen';
import {vh} from '../../../theme/units';
import ActivityLoader from '../../../Components/ActivityLoader';
import {colors} from '../../../theme/colors';
import {useChangePassMutation} from '../../../Api/resetPassApiSlice';
import {presentToast, showToast} from '../../../Utils/toast';

// Validation Schema using Yup
const changePasswordValidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Current password is required'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const ChangePassword = () => {
  const navigation = useNavigation();
  const {resetToScreen} = useResetToScreen();
  const [changePass, {isLoading, error, isSuccess}] = useChangePassMutation();

  const changePassRef = useRef(null);

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const handleCloseModal = () => {
    if (changePassRef.current) changePassRef.current.close();
  };
  const handleSuccessModal = () => {
    if (changePassRef.current) changePassRef.current.close();
    setTimeout(() => {
      resetToScreen(0, routes.mainStack.main);
    }, 650);
  };
  const handleLogin = async (values, resetForm) => {
    console.log('Change Password Data >>>', values);
    // Handle the change password logic here
    const payload = {
      oldPassword: values?.currentPassword,
      newPassword: values?.newPassword,
      type: 'USER',
    };

    const response = await changePass(payload)
      .unwrap()
      .then(res => {
        console.log('Password change successfulyy', res);
        resetForm();
        if (changePassRef.current) changePassRef.current.open();
        setTimeout(() => {
          if (changePassRef.current) changePassRef.current.close();
          resetToScreen(0, routes.mainStack.main);
        }, 1200);
      })
      .catch(err => {
        console.log('Error occur', err);
        showToast(err?.data?.message);
      });
  };

  return (
    <Background>
      <CustomHeader routeName={routes.main.changePassword} />

      <View style={layout.flex}>
        <Container
          keyboardAware
          keyboardHandled={'handled'}
          contentContainerStyle={styles.mainContentContainer}>
          <View>
            <Formik
              initialValues={{
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={changePasswordValidationSchema}
              validateOnChange={validateAfterSubmit}
              validateOnBlur={validateAfterSubmit}
              onSubmit={(values, {resetForm}) => {
                Keyboard.dismiss();
                handleLogin(values, resetForm);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
                values,
                isValid,
              }) => {
                return (
                  <>
                    <View style={styles.contentContainer}>
                      {/* Current Password */}
                      <InputField
                        placeholder="Enter Current Password"
                        onChangeText={handleChange('currentPassword')}
                        onBlur={handleBlur('currentPassword')}
                        value={values?.currentPassword}
                        required
                        password
                        errors={
                          touched.currentPassword && errors.currentPassword
                        }
                        returnKeyType={'done'}
                        leftIcon={'key'}
                      />

                      {/* New Password */}
                      <InputField
                        placeholder="Enter New Password"
                        onChangeText={handleChange('newPassword')}
                        onBlur={handleBlur('newPassword')}
                        value={values?.newPassword}
                        required
                        password
                        errors={touched.newPassword && errors.newPassword}
                        returnKeyType={'done'}
                        leftIcon={'key'}
                      />

                      {/* Confirm Password */}
                      <InputField
                        placeholder="Enter Confirm Password"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values?.confirmPassword}
                        required
                        password
                        errors={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        returnKeyType={'done'}
                        leftIcon={'key'}
                      />
                      {isLoading ? (
                        <ActivityLoader color={colors.theme.secondary} />
                      ) : (
                        <MainButton
                          style={styles.submitButton}
                          title={'Update'}
                          disabled={!isValid}
                          onPress={() => {
                            setValidateAfterSubmit(true);
                            handleSubmit();
                          }}
                        />
                      )}
                    </View>
                  </>
                );
              }}
            </Formik>
          </View>
          <BottomSheet
            togglePopup={changePassRef}
            successPopup={true}
            onBackButtonPress={handleCloseModal}
            modalHeight={vh * 45}
            onBackdropPress={handleCloseModal}
            onPress={handleSuccessModal}
            label={'Password Updated'}
            description={`Your password has been updated successfully!`}
            btnTitle={'Ok, Thanks'}
          />
        </Container>
      </View>
    </Background>
  );
};

export default ChangePassword;
