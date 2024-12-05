import React, {useState, memo} from 'react';
import {Text, TextInput, View} from 'react-native';
import SyneRegular from '../wrappers/Texts/SyneRegular';
import IconButton from '../Buttons/IconButton';
import TextInputMask from 'react-native-mask-input';
import {colors} from '../../theme/colors';
import styles from './styles';
import Animated, {
  BounceIn,
  BounceInDown,
  FadeInUp,
  FadeOut,
  SlideInLeft,
} from 'react-native-reanimated';
import MyIcons from '../MyIcons';
import CustomText from '../wrappers/Texts/CustomText';
import {spacing} from '../../theme/styles';

// Label Component
export const LabelComponent = memo(({label, required}) => (
  <CustomText
    style={styles.label}
    text={
      <>
        {label}
        {required && <SyneRegular text={'*'} style={styles.asterisk} />}
      </>
    }
  />
));

const InputField = ({
  inputRef,
  mask,
  label,
  leftIcon, // Left-side icon for email/password
  required,
  placeholder,
  errors,
  multiline,
  onChangeText,
  value,
  password,
  style,
  keyboardType,
  maxLength,
  numberOfLines,
  returnKeyType,
  editable,
  onFocusCallBack = () => {},
  onBlurCallBack = () => {},
  onSubmitEditing = () => {},
}) => {
  const [focused, setFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(
    password ? true : false,
  );

  const showPassword = () => setSecureTextEntry(!secureTextEntry);
  const onFocus = () => {
    onFocusCallBack();
    !focused && setFocused(true);
  };
  const onBlur = () => {
    onBlurCallBack();

    focused && setFocused(false);
  };

  return (
    <Animated.View
      style={[styles.container, style]}
      entering={FadeInUp.duration(500)}
      exiting={FadeOut.duration(500)}>
      {/* Label */}
      {label && <LabelComponent label={label} required={required} />}

      {/* Input Container */}
      <View
        style={[
          styles.inputContainer,
          multiline && styles.multilineContainer,
          focused && styles.focusedContainer,
        ]}>
        {/* Left Icon */}
        {leftIcon && (
          <View
            style={[
              {marginRight: 10},
              multiline && {marginTop: spacing.small},
            ]}>
            <MyIcons
              name={leftIcon}
              iconStyle={styles.leftIcon}
              color="transparent"
            />
          </View>
        )}

        {/* Input Field */}
        {mask ? (
          <TextInputMask
            ref={inputRef}
            style={[styles.inputStyle, multiline && styles.multiline]}
            onFocus={onFocus}
            onBlur={onBlur}
            numberOfLines={numberOfLines}
            mask={mask}
            multiline={multiline}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={colors.text.placeholder}
            secureTextEntry={secureTextEntry}
          />
        ) : (
          <TextInput
            ref={inputRef}
            style={[styles.inputStyle, multiline && styles.multiline]}
            onFocus={onFocus}
            onBlur={onBlur}
            returnKeyType={returnKeyType ? returnKeyType : 'next'}
            multiline={multiline}
            onChangeText={onChangeText}
            editable={editable}
            value={value}
            numberOfLines={numberOfLines}
            keyboardType={keyboardType}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={colors.text.placeholder}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
          />
        )}

        {/* Password Visibility Toggle */}
        {password && (
          <IconButton
            iconStyle={[styles.eye, !secureTextEntry && styles.highlightEye]}
            icon={secureTextEntry ? 'eyecut' : 'eye'}
            onPress={showPassword}
          />
        )}
      </View>

      {/* Error Display */}
      {errors ? (
        <Animated.View
          exiting={FadeOut.duration(600)}
          entering={BounceIn.duration(300)}>
          <Text style={styles.error}>{errors}</Text>
        </Animated.View>
      ) : (
        <View />
      )}
    </Animated.View>
  );
};

export default InputField;
