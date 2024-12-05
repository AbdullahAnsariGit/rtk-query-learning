import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeOut, SlideInLeft} from 'react-native-reanimated';
import Background from '../../../Components/Background';
import CustomHeader from '../../../Components/CustomHeader';
import InputField from '../../../Components/InputField';
import MainContainer from '../../../Components/MainContainer';
import routes from '../../../Navigation/routes';
import {font, spacing} from '../../../theme/styles';
import {updatedRandomImages} from '../../../Utils/dummyData';
import styles from './styles';
// import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import RaffleCard from '../../../Components/Cards/RafflesCard';
import MyIcons from '../../../Components/MyIcons';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import fonts from '../../../Assets/fonts';
import {appImages} from '../../../Assets/Images';
import {vh} from '../../../theme/units';
import MainButton from '../../../Components/Buttons/MainButton';

const RafflesPackages = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const handleSearchChange = text => {
    setSearch(text);
  };

  // Dummy data for profiles
  const profiles = [0, 1, 2, 3, 4, 5, 6];

  const renderProfile = ({item}) => (
    <Animated.View
      exiting={FadeOut.duration(600)}
      entering={SlideInLeft.duration(300)}
      style={styles?.profileWrap}>
      <FastImage source={item?.profileImage} style={styles.profiles} />
    </Animated.View>
  );

  const rafflesData = [
    {
      id: '1',
      title: 'ST Rita’s Collage P&F Retr....',
      priceInfo: 'Price Worth - 10 La Mer Gift Hampers',
      timeInfo: 'Time Remaining - 2 Days',
    },
    {
      id: '2',
      title: 'ABC Charity Event',
      priceInfo: 'Price Worth - 5 Apple Watches',
      timeInfo: 'Time Remaining - 3 Days',
    },
    {
      id: '3',
      title: 'XYZ Foundation Fundraiser',
      priceInfo: 'Price Worth - 3 Laptops',
      timeInfo: 'Time Remaining - 5 Days',
    },
    {
      id: '4',
      title: 'Community Raffle',
      priceInfo: 'Price Worth - 2 PlayStation 5 Consoles',
      timeInfo: 'Time Remaining - 1 Week',
    },
    {
      id: '5',
      title: 'School Charity Drive',
      priceInfo: 'Price Worth - 1 iPhone 14',
      timeInfo: 'Time Remaining - 10 Days',
    },
    {
      id: '6',
      title: 'Animal Shelter Fundraiser',
      priceInfo: 'Price Worth - 20 Gift Cards',
      timeInfo: 'Time Remaining - 6 Days',
    },
    {
      id: '7',
      title: 'Youth Sports Raffle',
      priceInfo: 'Price Worth - 2 Electric Scooters',
      timeInfo: 'Time Remaining - 3 Days',
    },
    {
      id: '8',
      title: 'Local Library Support',
      priceInfo: 'Price Worth - 10 Book Collections',
      timeInfo: 'Time Remaining - 4 Days',
    },
    {
      id: '9',
      title: 'City Marathon Prize Raffle',
      priceInfo: 'Price Worth - 2 High-end Bicycles',
      timeInfo: 'Time Remaining - 2 Days',
    },
    {
      id: '10',
      title: 'Tech Giveaway',
      priceInfo: 'Price Worth - 3 VR Headsets',
      timeInfo: 'Time Remaining - 1 Week',
    },
  ];

  const renderRaffleItem = ({item}) => {
    console.log('item-id', item.id);
    return (
      <ImageBackground
        source={appImages.ticketBg}
        resizeMode="stretch"
        style={styles.ticketCardContainer}>
        <View style={styles.ticketWrap}>
          <MyIcons name="ticket" size={70} />
          <View style={styles?.ticketsCount}>
            <CustomText text="x15" font={fonts.q.regular} size={font.small} />
          </View>
        </View>
        <CustomText
          text="Purchase 05 Raffle Creation for"
          font={fonts.q.regular}
          size={font.xlarge}
        />
        <View style={{flexDirection: 'row', paddingHorizontal: spacing.large}}>
          <CustomText
            text="$"
            font={fonts.m.regular}
            size={font.large}
            style={{marginTop: spacing.small}}
          />
          <CustomText
            text="5.00"
            font={fonts.m.regular}
            size={font.xxlarge + font.large}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}>
          <MainButton title="Buy New" style={styles.ticketBuy} />
        </View>
      </ImageBackground>
    );
  };
  return (
    <>
      <Background>
        <CustomHeader routeName={routes?.main.rafflesPackages} />
        <MainContainer>
          <FlatList
            data={rafflesData}
            renderItem={renderRaffleItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: spacing.medium,
            }}
            // style={{maxHeight: 80}}
            ItemSeparatorComponent={() => (
              <View style={{height: spacing.large}} />
            )}
          />
        </MainContainer>
      </Background>
    </>
  );
};

export default RafflesPackages;
