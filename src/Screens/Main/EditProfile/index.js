import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import * as Yup from 'yup';
import MainButton from '../../../Components/Buttons/MainButton';
import Container from '../../../Components/Container';
import InputField from '../../../Components/InputField';
import {layout} from '../../../theme/styles';
import styles from './styles';
import CustomHeader from '../../../Components/CustomHeader';
import routes from '../../../Navigation/routes';
import Background from '../../../Components/Background';
import {useResetToScreen} from '../../../Functions/resetToScreen';

const editProfileValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
});

const EditProfile = () => {
  const navigation = useNavigation();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {resetToScreen} = useResetToScreen();

  const handleEditProfile = values => {
    Keyboard.dismiss();
    console.log('Edit Profile Data >>>', values);
    resetToScreen(0, routes.mainStack.main);
    // Handle the edit profile logic here
  };

  return (
    <Background>
      <CustomHeader routeName={routes.main.editProfile} />

      <View style={layout.flex}>
        <Container
          keyboardAware
          keyboardHandled={'handled'}
          contentContainerStyle={styles.mainContentContainer}>
          <View>
            <Formik
              initialValues={{
                email: '',
                username: '',
              }}
              validationSchema={editProfileValidationSchema}
              validateOnChange={validateAfterSubmit}
              validateOnBlur={validateAfterSubmit}
              onSubmit={values => {
                setIsLoading(true);
                handleEditProfile(values);
                setIsLoading(false);
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
                      {/* Email */}
                      <InputField
                        placeholder="Enter Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values?.email}
                        required
                        errors={touched.email && errors.email}
                        keyboardType={'email-address'}
                        returnKeyType={'done'}
                        leftIcon={'mail'}
                      />

                      {/* Username */}
                      <InputField
                        placeholder="Enter Username"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values?.username}
                        required
                        errors={touched.username && errors.username}
                        returnKeyType={'done'}
                        leftIcon={'user'}
                      />

                      {isLoading ? (
                        <View />
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
        </Container>
      </View>
    </Background>
  );
};

export default EditProfile;
