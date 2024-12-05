import {Formik} from 'formik';
import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import Animated, {BounceIn, FadeOut} from 'react-native-reanimated';
import * as Yup from 'yup';
import {useCreateRafflesMutation} from '../../../Api/rafflesApiSlice';
import {appImages} from '../../../Assets/Images';
import ActivityLoader from '../../../Components/ActivityLoader';
import BottomSheet from '../../../Components/BottomSheet';
import MainButton from '../../../Components/Buttons/MainButton';
import Container from '../../../Components/Container';
import CustomHeader from '../../../Components/CustomHeader';
import {DateTimePickerComponent} from '../../../Components/DateTimePicker';
import DropDown from '../../../Components/DropDown';
import DocumentImagePicker from '../../../Components/ImagePicker/DocumentImagePicker/DocumentImagePicker';
import InputField from '../../../Components/InputField';
import {useResetToScreen} from '../../../Functions/resetToScreen';
import routes from '../../../Navigation/routes';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import {styles} from './styles';
// Validation schema for the form
const validationSchema = Yup.object({
  raffleType: Yup.string().required('Raffle type is required'),
  raffleName: Yup.string().required('Name of Raffle is required'),
  raffleImage: Yup.mixed().required('Image of Raffle is required'),
  ticketsQuantity: Yup.number()
    .required('Tickets quantity is required')
    .positive()
    .integer(),
  ticketCost: Yup.number().required('Per ticket cost is required').positive(),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date().required('End date is required'),
  // .min(Yup.ref('startDate'), 'End date must be after start date'),
  winningPrize: Yup.string().required('Winning prize is required'),
});

const CreateRaffles = () => {
  const {resetToScreen} = useResetToScreen();
  const [createRaffles, {isLoading, error, isSuccess}] =
    useCreateRafflesMutation();

  console.log('isLoading', isLoading);

  const createRafflesRef = useRef(null);

  const handleCloseModal = () => {
    if (createRafflesRef.current) createRafflesRef.current.close();
  };
  const handleSuccessModal = () => {
    if (createRafflesRef.current) createRafflesRef.current.close();
    // setTimeout(() => {
    //   resetToScreen(0, routes.mainStack.main);
    // }, 650);
  };

  const raffleTypes = [{key: '0', value: 'Raffle'}];
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  console.log('randomNumber', randomNumber);

  return (
    <>
      <CustomHeader routeName={routes.main.createRaffles} />

      <Container keyboardAware>
        <Formik
          initialValues={{
            raffleType: '',
            raffleName: '',
            raffleDescription: '',
            raffleImage: null,
            ticketsQuantity: '',
            ticketCost: '',
            startDate: '',
            endDate: '',
            winningPrize: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, {resetForm}) => {
            const formData = new FormData();
            formData.append('type', values.raffleType);
            formData.append('title', values.raffleName);
            formData.append('description', values.raffleDescription);
            formData.append('numTickets', values.ticketsQuantity);
            formData.append('ticketPrice', values.ticketCost);
            formData.append('startDate', values.startDate.toISOString());
            formData.append('endDate', values.endDate.toISOString());
            formData.append('prize', values.winningPrize);
            if (values.raffleImage) {
              const image = {
                uri: values.raffleImage.uri,
                type: values.raffleImage.type,
                name: `${randomNumber}${values.raffleImage.name}`,
              };
              formData.append('image', image);
            }

            try {
              // Directly send the formData
              const response = await createRaffles(formData).unwrap();
              console.log('Response:', response);
              resetForm();
            } catch (err) {
              console.error('Error during form submission:', err);
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              <DropDown
                options={raffleTypes}
                callback={value =>
                  setFieldValue('raffleType', raffleTypes[value].value)
                }
                placeholder="Raffle Type"
                required
                leftIcon={appImages.dropdownraffles}
                customWidth={'100%'}
                value={values.raffleType}
                onChange={handleChange('raffleType')}
                onBlur={handleBlur('raffleType')}
                errors={touched.raffleType && errors.raffleType}
              />

              <InputField
                leftIcon={'raffles'}
                placeholder="Name of Raffle"
                required
                keyboardType={'text'}
                style={{paddingHorizontal: 0, width: '100%'}}
                value={values.raffleName}
                onChangeText={handleChange('raffleName')}
                onBlur={handleBlur('raffleName')}
                errors={touched.raffleName && errors.raffleName}
              />
              <InputField
                leftIcon={'raffles'}
                placeholder="Description of Raffle"
                required
                keyboardType={'text'}
                style={{paddingHorizontal: 0, width: '100%'}}
                value={values.raffleDescription}
                onChangeText={handleChange('raffleDescription')}
                onBlur={handleBlur('raffleDescription')}
                errors={touched.raffleDescription && errors.raffleDescription}
              />
              <View
                style={[
                  styles.inputContainer,
                  !errors.raffleImage && {
                    marginBottom: spacing.medium,
                  },
                ]}>
                <DocumentImagePicker
                  handleImage={value => setFieldValue('raffleImage', value)}
                />
              </View>
              {touched.raffleImage && errors.raffleImage && (
                <Animated.View
                  exiting={FadeOut.duration(600)}
                  entering={BounceIn.duration(300)}>
                  <Text style={styles.error}>
                    {touched.raffleImage && errors.raffleImage}
                  </Text>
                </Animated.View>
              )}

              <InputField
                placeholder="Select Tickets Quantity"
                required
                keyboardType={'numeric'}
                style={{paddingHorizontal: 0, width: '100%'}}
                value={values.ticketsQuantity}
                onChangeText={handleChange('ticketsQuantity')}
                onBlur={handleBlur('ticketsQuantity')}
                errors={touched.ticketsQuantity && errors.ticketsQuantity}
              />

              <InputField
                placeholder="Per Ticket Cost"
                required
                keyboardType={'numeric'}
                style={{paddingHorizontal: 0, width: '100%'}}
                value={values.ticketCost}
                onChangeText={handleChange('ticketCost')}
                onBlur={handleBlur('ticketCost')}
                errors={touched.ticketCost && errors.ticketCost}
              />

              <DateTimePickerComponent
                placeholder="Start Date"
                icon="calendar"
                mode="datetime"
                value={values.startDate}
                onChangeDate={value => setFieldValue('startDate', value)}
                onBlur={handleBlur('startDate')}
                errors={touched.startDate && errors.startDate}
              />

              <DateTimePickerComponent
                placeholder="End Date"
                icon="calendar"
                mode="datetime"
                value={values.endDate}
                onChangeDate={value => setFieldValue('endDate', value)}
                onBlur={value => handleBlur('endDate', value)}
                errors={touched.endDate && errors.endDate}
              />

              <InputField
                placeholder="Winning Prize"
                required
                keyboardType={'text'}
                style={{paddingHorizontal: 0, width: '100%'}}
                value={values.winningPrize}
                onChangeText={handleChange('winningPrize')}
                onBlur={handleBlur('winningPrize')}
                errors={touched.winningPrize && errors.winningPrize}
              />

              {isLoading ? (
                <ActivityLoader color={colors.theme.secondary} />
              ) : (
                <MainButton title={'Create Raffles'} onPress={handleSubmit} />
              )}
            </>
          )}
        </Formik>

        <BottomSheet
          togglePopup={createRafflesRef}
          successPopup={true}
          onClose={() => resetToScreen(0, routes.mainStack.main)}
          onBackButtonPress={handleCloseModal}
          modalHeight={vh * 45}
          onBackdropPress={handleCloseModal}
          onPress={handleSuccessModal}
          label={'Request Sent Successfully'}
          description={`Your Raffle request has been sent to admin successfully!`}
          btnTitle={'Ok, Thanks'}
        />
      </Container>
    </>
  );
};

export default CreateRaffles;
