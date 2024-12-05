import React, {useRef, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {Formik} from 'formik';
import MainButton from '../../../Components/Buttons/MainButton';
import Container from '../../../Components/Container';
import InputField from '../../../Components/InputField';
import routes from '../../../Navigation/routes';
import {colors} from '../../../theme/colors';
import {layout} from '../../../theme/styles';
import {cardPaymentValidation} from '../../../Validations/authValidations';
import styles from './style';

import ActivityLoader from '../../../Components/ActivityLoader';
import BottomSheet from '../../../Components/BottomSheet';
import CustomHeader from '../../../Components/CustomHeader';
import SpaceLine from '../../../Components/SpaceLine';
import {useResetToScreen} from '../../../Functions/resetToScreen';
import {vh} from '../../../theme/units';

const PaymentDetails = ({navigation, route}) => {
  const signupData = route?.params?.signupData;
  const {resetToScreen} = useResetToScreen();
  const handleSubmit = () => {
    console.log('<<<< Handle Submit >>>>');
  };

  console.log(signupData, 'signup data in final screen');
  const [subPurchaseVisible, setSubPurchaseVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [unSuccessfullVisible, setUnSuccessfullVisible] = useState(false);
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sheetRef = useRef(null);
  const paymentSuccessRef = useRef(null);

  const handlePurchaseVisibility = () => {
    if (sheetRef?.current) {
      sheetRef.current.close();
      setSubPurchaseVisible(false);
    }
  };

  const purchaseNow = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
      setSubPurchaseVisible(false);
    }
    setIsLoading(true);
    setTimeout(() => {
      if (paymentSuccessRef?.current) paymentSuccessRef?.current.open();
      setIsLoading(false);
      setSuccessVisible(true);
    }, 650);
  };

  const handleSuccessVisibility = () => {
    if (paymentSuccessRef.current) paymentSuccessRef.current.close();
    setSuccessVisible(false);
  };

  const handleUnsuccessfulVisibility = () =>
    setUnSuccessfullVisible(!unSuccessfullVisible);

  const onPaymentSuccess = data => {
    if (paymentSuccessRef.current) paymentSuccessRef.current.close();
    setSuccessVisible(false);
    setTimeout(() => {
      setIsLoading(false);
      resetToScreen(0, routes.mainStack.main);
    }, 650);
  };

  return (
    <>
      <SafeAreaView style={layout.flex}>
        <CustomHeader routeName={routes.main.paymentDetails} />
        <Formik
          initialValues={{
            cardholdername: '',
            cardnumber: '',
            cvv: '',
            month: '',
            year: '',
          }}
          validationSchema={cardPaymentValidation}
          validateOnChange={validateAfterSubmit}
          validateOnBlur={validateAfterSubmit}
          onSubmit={values => onPaymentSuccess(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            setFieldValue,
            isValid,
            values,
          }) => {
            return (
              <>
                <Container
                  contentContainerStyle={styles.container}
                  keyboardAware>
                  <InputField
                    leftIcon={'user'}
                    placeholder={'Enter Card Holder Name'}
                    onChangeText={handleChange('cardholdername')}
                    errors={errors?.cardholdername}
                    required
                  />
                  <InputField
                    leftIcon={'card'}
                    onChangeText={handleChange('cardnumber')}
                    keyboardType={'number-pad'}
                    maxLength={16}
                    placeholder={'Enter Card Number'}
                    errors={errors?.cardnumber}
                    required
                  />
                  <View style={layout.flexRow}>
                    <InputField
                      leftIcon={'calendar'}
                      style={styles.datePicker}
                      keyboardType={'number-pad'}
                      placeholder="mm"
                      onChangeText={handleChange('month')}
                      errors={errors?.month}
                      maxLength={2}
                      required
                    />
                    <InputField
                      leftIcon={'calendar'}
                      onChangeText={handleChange('year')}
                      style={styles.datePicker}
                      errors={errors?.year}
                      keyboardType={'number-pad'}
                      placeholder="yy"
                      maxLength={2}
                    />
                  </View>
                  <InputField
                    leftIcon={'card'}
                    onChangeText={handleChange('cvv')}
                    placeholder={'Enter CVV Code'}
                    required
                    keyboardType={'number-pad'}
                    maxLength={4}
                    errors={errors?.cvv}
                    returnKeyType="done"
                  />
                  <SpaceLine style={{margin: 15}} />
                  {isLoading ? (
                    <ActivityLoader color={colors.theme.secondary} />
                  ) : (
                    <MainButton
                      title={'Pay Now'}
                      disabled={!isValid}
                      onPress={() => {
                        if (paymentSuccessRef.current)
                          paymentSuccessRef.current.open();
                        setSuccessVisible(true);
                      }}
                    />
                  )}
                </Container>
              </>
            );
          }}
        </Formik>

        <BottomSheet
          togglePopup={paymentSuccessRef}
          successPopup={successVisible}
          onBackButtonPress={handleSuccessVisibility}
          modalHeight={vh * 45}
          onBackdropPress={handleSuccessVisibility}
          onPress={onPaymentSuccess}
          label={'Payment Successfully'}
          description={`Payment has been made successfully!`}
          amount="20$"
        />
        {/* <BlurviewComponent visible={successVisible} /> */}
      </SafeAreaView>
    </>
  );
};

export default PaymentDetails;
