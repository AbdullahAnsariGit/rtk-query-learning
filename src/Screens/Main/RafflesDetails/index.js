import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeOut, SlideInLeft} from 'react-native-reanimated';
import {useGetSingleRaffleQuery} from '../../../Api/rafflesApiSlice';
import fonts from '../../../Assets/fonts';
import {appImages} from '../../../Assets/Images';
import Background from '../../../Components/Background';
import MainButton from '../../../Components/Buttons/MainButton';
import CustomHeader from '../../../Components/CustomHeader';
import MyIcons from '../../../Components/MyIcons';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import routes from '../../../Navigation/routes';
import {colors} from '../../../theme/colors';
import {font, spacing} from '../../../theme/styles';
import {vh} from '../../../theme/units';
import styles from './styles';
import {imageServer} from '../../../Api/configs';
const RafflesDetails = ({route}) => {
  const {raffleId} = route.params;
  const navigation = useNavigation();
  const [selectedTicket, setSelectedTicket] = useState(0);
  const {data, isLoading, isFetching} = useGetSingleRaffleQuery(raffleId);

  const raffle = JSON.parse(JSON.stringify(data?.data?.raffle || []));
  const deals = JSON.parse(JSON.stringify(data?.data?.deals || []));

  // Convert startDate to a more readable format
  const startDate = moment(raffle.startDate).format(
    'dddd, Do MMMM YYYY, h:mm a',
  );
  const endDate = moment(raffle.endDate).format('dddd, Do MMMM YYYY, h:mm a');
  // Constructing the text for the draw event
  const drawText = `The Draw will take place at ${moment(
    raffle.startDate,
  ).format('h:mm a')} AEST on ${startDate}`;
  const salesCloseText = `Ticket sales close on ${endDate}`;
  return (
    <>
      <Background>
        <StatusBar backgroundColor={'#123A3D'} hidden={true} />
        <ImageBackground
          source={
            raffle?.image
              ? {uri: imageServer + raffle?.image}
              : appImages.raffles
          }
          style={{height: vh * 26, width: '100%'}}
          resizeMode="fill">
          <CustomHeader
            routeName={routes.main.rafflesDetail}
            title={'Raffles Details'}
          />
        </ImageBackground>
        <View
          style={{
            width: '100%',
            backgroundColor: colors.background.orange,
            paddingVertical: spacing.small,
            paddingHorizontal: spacing.large,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: -spacing.medium,
          }}>
          <CustomText
            font={fonts.g.regular}
            size={font.medium}
            color={colors.text.black}
            text={salesCloseText}
          />
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: spacing.medium,
            gap: spacing.small,
            paddingVertical: spacing.small,
          }}>
          <CustomText text={raffle?.title} font={fonts.m.regular} />
          <CustomText text="Raffle Details" />
          <CustomText
            font={fonts.q.regular}
            size={font.medium}
            color={colors.text.altGrey}
            text={raffle?.description}
          />
          {/* <CustomText text="The Prizes" font={fonts.m.regular} />
          <CustomText
            font={fonts.q.regular}
            size={font.medium}
            color={colors.text.altGrey}
            text="Prizes are not transferable or exchangeable for cash.
Prize images may be for illustrative purposes only and
are not necessarily an image of the actual prize.

The prizes, including all relevant Terms and Conditions
relating to the prizes."
          /> */}
          <CustomText text="Ticket Deals" font={fonts.m.regular} />
          <View style={styles.ticketContainer}>
            {deals?.map((item, index) => {
              const priceDetails = `${item?.units} for ${item?.price}$`;

              return (
                <Animated.View
                  key={index}
                  style={[
                    styles?.ticketDealStyles,
                    selectedTicket === index && {
                      borderWidth: 1,
                      borderStyle: 'dashed',
                      borderColor: colors.background.orange,
                    },
                  ]}
                  exiting={FadeOut.duration(300)}
                  entering={SlideInLeft.duration(800)}>
                  <TouchableOpacity
                    style={styles?.ticketSingleBtn}
                    key={index}
                    onPress={() => setSelectedTicket(index)}>
                    <MyIcons name="ticket" size={50} />
                    <CustomText
                      font={fonts.q.regular}
                      size={font.medium}
                      color={colors.text.altGrey}
                      text={priceDetails}
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
          <CustomText text="The Prizes" font={fonts.m.regular} />
          <CustomText
            font={fonts.q.regular}
            size={font.medium}
            color={colors.text.altGrey}
            text={drawText}
          />
          <MainButton
            title={'Buy Ticket Now'}
            onPress={() => navigation.navigate(routes.main.paymentMethod)}
            style={{alignSelf: 'center', marginTop: spacing.small}}
          />
        </ScrollView>
      </Background>
    </>
  );
};

export default RafflesDetails;
