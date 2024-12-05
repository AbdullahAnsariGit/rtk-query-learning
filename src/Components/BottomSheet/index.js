import React from 'react';
import {Dimensions, KeyboardAvoidingView, Platform, View} from 'react-native';
import {FadeInUp} from 'react-native-reanimated';
import fonts from '../../Assets/fonts';
import {colors} from '../../theme/colors';
import {font, layout, spacing} from '../../theme/styles';
import {vh, vw} from '../../theme/units';
import MainButtonWithoutAnimation from '../Buttons/MainButtonWithAnimation';
import CustomBottomSheet from '../CustomBottomSheet';
import MyIcons from '../MyIcons';
import CustomText from '../wrappers/Texts/CustomText';
import SyneRegular from '../wrappers/Texts/SyneRegular';
import {styles} from './style';

const {height} = Dimensions.get('screen');

const BottomSheet = props => {
  const {
    togglePopup,
    alertPopup,
    onBackButtonPress,
    onBackdropPress,
    onPress,
    onPressNo,
    onPressYes,
    successPopup = false,
    modalHeight,
    description,
    label,
    amount,
    btnTitle,
    onClose,
  } = props;

  const renderTitle = () => {
    return (
      <View style={styles?.titleWrapper}>
        <SyneRegular text={props?.title} />
      </View>
    );
  };
  return (
    <CustomBottomSheet
      draggable={true}
      ref={togglePopup}
      height={modalHeight ? modalHeight : height * 0.3}
      onClose={onClose}
      backdropColor="rgba(0,0,0,0.5)"
      closeOnDragDown={true}
      closeOnPressBack={onBackButtonPress}
      closeOnPressMask={onBackdropPress}
      customStyles={{
        container: styles.modal,
      }}
      draggableIconColor={colors.background?.altGrey}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={[styles.container, {flex: 1}]}>
          {props?.title && renderTitle()}
          {successPopup && (
            <View style={styles.successPopupContainer}>
              <MyIcons name={'checked'} size={vh * 10} />
              {/* <FastImage source={appIcons.success} style={styles.logoStyles} /> */}
              <View style={{alignItems: 'center', gap: spacing.small}}>
                <CustomText
                  font={fonts.m.regular}
                  text={label ? label : 'Success'}
                />
                <CustomText
                  style={{textAlign: 'center'}}
                  size={font.medium}
                  font={fonts.q.regular}
                  text={
                    description ? description : 'Your request was successfully'
                  }
                />
                {amount && (
                  <CustomText
                    style={{textAlign: 'center'}}
                    size={font.medium}
                    font={fonts.q.regular}
                    text={'AMOUNT PAID'}
                  />
                )}
                {amount && <CustomText font={fonts.m.regular} text={amount} />}
              </View>
              <MainButtonWithoutAnimation
                title={btnTitle ? btnTitle : 'Ok, Go Back to Home'}
                style={{width: vw * 70}}
                onPress={onPress}
                animation={FadeInUp.duration(300)}
              />
            </View>
          )}
          {alertPopup && (
            <View style={styles.successPopupContainer}>
              <MyIcons name={'alert'} size={vh * 10} />
              {/* <FastImage source={appIcons.success} style={styles.logoStyles} /> */}
              <View style={{alignItems: 'center', gap: 6}}>
                <CustomText text={label} />
                <CustomText text={description} />
              </View>
              <View style={{flexDirection: 'row', gap: spacing.small}}>
                <MainButtonWithoutAnimation
                  animation={FadeInUp.duration(300)}
                  title={'Yes'}
                  style={{width: layout.contentWidth - spacing.xxxlarge}}
                  onPress={onPressYes}
                />
                <MainButtonWithoutAnimation
                  animation={FadeInUp.duration(600)}
                  title={'No'}
                  style={{
                    width: layout.contentWidth - spacing.xxxlarge,
                    backgroundColor: colors?.background.orange,
                  }}
                  textStyle={{color: colors.text.black}}
                  onPress={onPressNo}
                />
              </View>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </CustomBottomSheet>
  );
};

export default BottomSheet;
