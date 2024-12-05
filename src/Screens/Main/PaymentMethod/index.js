import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Background from '../../../Components/Background';
import BottomSheet from '../../../Components/BottomSheet';
import MainButton from '../../../Components/Buttons/MainButton';
import CustomHeader from '../../../Components/CustomHeader';
import MyIcons from '../../../Components/MyIcons';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import {useResetToScreen} from '../../../Functions/resetToScreen';
import routes from '../../../Navigation/routes';
import {spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import styles from './styles';

const PaymentMethod = () => {
  const paymentSuccessRef = useRef(null);
  const {resetToScreen} = useResetToScreen();

  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [successVisible, setSuccessVisible] = useState(false);
  const [selectItem, setSelectIndex] = useState(0);
  const handleSuccessVisibility = () => {
    if (paymentSuccessRef.current) paymentSuccessRef.current.close();
    setSuccessVisible(false);
  };
  const onPaymentSuccess = data => {
    if (paymentSuccessRef.current) paymentSuccessRef.current.close();
    // setSuccessVisible(false);
    // setTimeout(() => {
    //   setIsLoading(false);
    //   resetToScreen(0, routes.mainStack.main);
    // }, 650);
  };

  const cardDetails = [
    {
      cardNo: '**** **** **** 6589',
      expire: 'Expiry: 12/28',
      icon: 'visa',
      color: '#FBB040',
      textColor: '#000000',
    },
    {
      cardNo: '**** **** **** 8745',
      expire: 'Expiry: 12/28',
      icon: 'mastercard',
      color: '#1A1A1A',
    },

    {
      cardNo: 'mailaddress@gmail.com',
      expire: 'Expiry: 12/28',
      icon: 'paypal',
      color: '#2a292d',
    },
    {
      cardNo: 'Google Pay',
      icon: 'googleplay',
      color: '#2a292d',
    },
    {
      title: 'Add Payment Method',
      icon: 'add',
      color: '#39393c',
    },
  ];
  return (
    <Background>
      <View style={styles.container}>
        <CustomHeader routeName={routes.main.paymentMethod} />
        <View style={styles?.cardWrap}>
          {cardDetails.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item?.title) {
                    navigation.navigate(routes.main.paymentDetails);
                  } else {
                    setSelectIndex(index);
                  }
                }}
                key={index}
                style={[
                  styles?.cardlist,
                  {
                    backgroundColor: item?.color,
                    justifyContent: 'space-between',
                    paddingLeft: 0,
                  },
                ]}>
                <View style={[styles?.cardlist]}>
                  <MyIcons name={item?.icon} size={item?.title ? 24 : 40} />
                  {item?.title ? (
                    <View>
                      <CustomText text="Add Payment Method" />
                    </View>
                  ) : (
                    <View>
                      <CustomText
                        text="**** **** **** 6589"
                        color={item?.textColor && item?.textColor}
                      />
                      <CustomText
                        text="Expiry: 12/28"
                        color={item?.textColor && item?.textColor}
                      />
                    </View>
                  )}
                </View>

                {selectItem == index && <MyIcons name="checked" />}
              </TouchableOpacity>
            );
          })}
        </View>
        <MainButton
          title={'Confirm Payment'}
          style={{width: '100%', marginTop: spacing.medium}}
          onPress={() => {
            if (paymentSuccessRef.current) paymentSuccessRef.current.open();
            setSuccessVisible(true);
          }}
        />

        <BottomSheet
          togglePopup={paymentSuccessRef}
          successPopup={successVisible}
          onClose={() => resetToScreen(0, routes.mainStack.main)}
          onBackButtonPress={handleSuccessVisibility}
          modalHeight={vh * 45}
          onBackdropPress={handleSuccessVisibility}
          onPress={onPaymentSuccess}
          label={'Payment Successfully'}
          description={`Payment has been made successfully!`}
          amount="20$"
        />
      </View>
    </Background>
  );
};

export default PaymentMethod;
