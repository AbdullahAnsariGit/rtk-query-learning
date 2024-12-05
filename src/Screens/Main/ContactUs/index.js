import {Formik} from 'formik';
import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useContactMutation} from '../../../Api/contactApiSlice';
import {appImages} from '../../../Assets/Images';
import Background from '../../../Components/Background';
import MainButton from '../../../Components/Buttons/MainButton';
import Container from '../../../Components/Container';
import CustomHeader from '../../../Components/CustomHeader';
import InputField from '../../../Components/InputField';
import {useResetToScreen} from '../../../Functions/resetToScreen';
import routes from '../../../Navigation/routes';
import {layout, spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import {contactUsValidationSchema} from '../../../Validations/appValidations';
import styles from './styles';
import ActivityLoader from '../../../Components/ActivityLoader';
import {colors} from '../../../theme/colors';

// Validation Schema using Yup

const ContactUs = () => {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const {resetToScreen} = useResetToScreen();

  const [contact, {isLoading, error, isSuccess}] = useContactMutation();
  console.log('isLoading-isLoading', isLoading);
  console.log('error-error', error);

  const handleSubmit = async (values, resetForm) => {
    console.log('Contact Us Data >>>', values);
    const contactData = {
      fullName: values?.fullName,
      email: values?.emailAddress,
      subject: values?.subject,
      message: values?.message,
    };
    let response = await contact(contactData)
      .unwrap()
      .then(res => {
        console.log('res-resres-res', res);
        // Alert.alert('Form submit');
        // resetForm();
      })
      .catch(err => {
        console.log('err', err);
      });

    // resetToScreen(0, routes.mainStack.main);
    // Handle the contact us logic here
  };

  return (
    <Background>
      <View style={layout.flex}>
        <CustomHeader routeName={routes.main.contactUs} />
        <Container
          keyboardAware
          keyboardHandled={'handled'}
          contentContainerStyle={styles.mainContentContainer}>
          <View>
            <View style={{paddingVertical: spacing.large}}>
              <FastImage
                resizeMode="cover"
                source={appImages?.bannerContact}
                style={{
                  height: vh * 24,
                  borderRadius: layout.borderRadius,
                  marginHorizontal: spacing.small,
                  backgroundColor: 'red',
                }}
              />
            </View>
            <Formik
              initialValues={{
                fullName: '',
                emailAddress: '',
                subject: '',
                message: '',
              }}
              validationSchema={contactUsValidationSchema}
              validateOnChange={validateAfterSubmit}
              validateOnBlur={validateAfterSubmit}
              onSubmit={(values, {resetForm}) => {
                handleSubmit(values, resetForm);
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
                  <View style={styles.contentContainer}>
                    {/* Full Name */}
                    <InputField
                      placeholder="Enter Full Name"
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                      required
                      errors={touched.fullName && errors.fullName}
                      returnKeyType={'done'}
                      leftIcon={'user'}
                    />

                    {/* Email Address */}
                    <InputField
                      placeholder="example@gmail.com"
                      onChangeText={handleChange('emailAddress')}
                      onBlur={handleBlur('emailAddress')}
                      value={values.emailAddress}
                      required
                      errors={touched.emailAddress && errors.emailAddress}
                      returnKeyType={'done'}
                      leftIcon={'mail'}
                    />
                    <InputField
                      placeholder="Enter subject"
                      onChangeText={handleChange('subject')}
                      onBlur={handleBlur('subject')}
                      value={values.subject}
                      required
                      errors={touched.subject && errors.subject}
                      returnKeyType={'done'}
                      leftIcon={'user'}
                    />
                    {/* <DropDown
                      leftIcon={appImages?.key}
                      placeholder="Subject"
                      customStyles={{
                        maxWidth: layout.contentWidth - (spacing.medium + 5),
                      }}
                      callback={value => {
                        console.log('value-value', value);
                      }}
                    /> */}

                    {/* Message */}
                    <InputField
                      multiline
                      placeholder="Write your message here..."
                      onChangeText={handleChange('message')}
                      onBlur={handleBlur('message')}
                      value={values.message}
                      required
                      errors={touched.message && errors.message}
                      returnKeyType={'done'}
                      leftIcon={'mail'}
                    />

                    {isLoading ? (
                      <ActivityLoader
                        style={styles.submitButton}
                        color={colors.theme.secondary}
                      />
                    ) : (
                      <MainButton
                        style={styles.submitButton}
                        title={'Send Feedback'}
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
        </Container>
      </View>
    </Background>
  );
};

export default ContactUs;
