import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {colors} from '../../theme/colors';
import {layout, spacing} from '../../theme/styles';
import {vh, vw} from '../../theme/units';
import {LabelComponent} from '../InputField';
import CustomText from '../wrappers/Texts/CustomText';
import MyIcons from '../MyIcons';
import Animated, {BounceIn, FadeOut} from 'react-native-reanimated';

export const DateTimePickerComponent = ({
  label,
  placeholder,
  icon,
  mode = 'date',
  errors,
  onChangeDate,
}) => {
  console.log('errors-errors', errors);
  const [date, setDate] = useState(null); // Start with null to show the placeholder
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log('event', selectedDate, event);
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      console.log('currentDate', currentDate);
      setDate(currentDate);
      onChangeDate(currentDate);
    }
    setShow(false);
  };

  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: date || new Date(), // Use the current date if none is selected
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    } else {
      setShow(true);
    }
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <>
      {label && <LabelComponent label={label} />}
      <TouchableOpacity
        style={[styles.container, !errors && {marginBottom: spacing.medium}]}
        onPress={showDatepicker}>
        {icon && <MyIcons name={icon} />}
        <CustomText
          text={date ? date.toLocaleDateString() : placeholder || 'Select date'}
          style={styles.placeholder}
          color={!date ? colors.text.placeholder : colors.text.white}
        />
      </TouchableOpacity>
      {show && Platform.OS === 'ios' && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      {errors && (
        <Animated.View
          exiting={FadeOut.duration(600)}
          entering={BounceIn.duration(300)}>
          <Text style={styles.error}>{errors}</Text>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: vh * 6.5,
    borderRadius: layout.borderRadius,
    paddingHorizontal: spacing.medium,
    backgroundColor: colors.input.background,
    gap: spacing.medium,
  },
  placeholder: {
    fontSize: 11,
  },
  error: {
    color: colors.text.red,
    marginTop: vh * 0.5,
    marginLeft: vw * 1,
    fontSize: vh * 1.5,
    fontStyle: 'italic',
    marginBottom: spacing.medium,
  },
});
