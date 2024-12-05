import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import BenzinRegular from '../../../Components/wrappers/Texts/BenzinRegular';
import {appImages} from '../../../Assets/Images';
import FastImage from 'react-native-fast-image';
import SyneRegular from '../../../Components/wrappers/Texts/SyneRegular';
import ClashRegular from '../../../Components/wrappers/Texts/ClashRegular';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/styles';
import BenzinBold from '../../../Components/wrappers/Texts/BenzinBold';
import MainButton from '../../../Components/Buttons/MainButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../Navigation/routes';
import CustomHeader from '../../../Components/CustomHeader';

const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();

  // Combined data for FlatList
  const data = [
    {type: 'profile'},
    {type: 'profileDetails'},
    {type: 'tabs'},
    {type: 'mediaSection', data: [0, 1, 2, 3]},
  ];

  const renderProfile = () => (
    <View style={{alignItems: 'center', paddingVertical: spacing.large}}>
      <FastImage source={appImages?.profile} style={styles?.profileStyles} />
      <BenzinRegular text={'109 Followers'} />
    </View>
  );

  const renderProfileDetails = () => {
    const renderProfileData = [
      {label: 'Full Name', labelValue: 'James Anderson'},
      {label: 'Email Address', labelValue: 'James@anderson.com'},
      {label: 'Phone Number', labelValue: '+012 345 6789 012'},
      // {label: 'Gender', labelValue: 'Male'},
      {label: 'DOB', labelValue: '24 Feb 1998'},
      {
        label: 'Biography',
        labelValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet Proin gravida dolor sit amet lacus accumsanet viverra justo commodo.',
      },
      {
        label: 'Interests',
        labelArr: [
          {interest: 'Music'},
          {interest: 'Hiking'},
          {interest: 'Gym'},
          {interest: 'Reading'},
        ],
      },
    ];

    return (
      <View style={{gap: spacing.medium}}>
        {renderProfileData.map((item, index) => (
          <View key={index} style={{gap: spacing.xsmall}}>
            <SyneRegular style={styles?.labelStyles} text={item?.label} />
            {item?.labelValue ? (
              <ClashRegular
                style={styles?.labelValStyles}
                text={item?.labelValue}
              />
            ) : (
              <View style={styles?.interestStyles}>
                {item?.labelArr &&
                  item?.labelArr.map((interestItem, index) => (
                    <View key={index} style={styles?.singleInterest}>
                      <SyneRegular
                        style={[
                          styles?.labelValStyles,
                          {color: colors?.text?.altGrey},
                        ]}
                        text={interestItem?.interest}
                      />
                    </View>
                  ))}
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };

  const renderTabs = () => (
    <View style={styles?.tabsStyles}>
      <TouchableOpacity onPress={() => setSelectedTab(0)}>
        <BenzinBold
          style={[
            styles?.labelStyles,
            {color: selectedTab === 0 ? '#0075FB' : '#000'},
          ]}
          text={'Media'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTab(1)}>
        <BenzinBold
          style={[
            styles?.labelStyles,
            {color: selectedTab === 1 ? '#0075FB' : '#000'},
          ]}
          text={'Journals'}
        />
      </TouchableOpacity>
    </View>
  );

  const renderMediaSection = ({data}) => (
    <View>
      <FlatList
        contentContainerStyle={{gap: spacing.small}}
        ItemSeparatorComponent={() => <View style={{height: spacing.small}} />}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <FastImage
            source={appImages?.media1}
            style={styles?.mediaImagesStyles}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{gap: spacing.small}}
      />
    </View>
  );

  // Main render function for FlatList
  const renderItem = ({item}) => {
    switch (item.type) {
      case 'profile':
        return renderProfile();
      case 'profileDetails':
        return renderProfileDetails();
      case 'tabs':
        return renderTabs();
      case 'mediaSection':
        return renderMediaSection({data: item.data});
      default:
        return null;
    }
  };

  return (
    <>
      <CustomHeader routeName={routes.main.myProfile} />
      <View style={styles.contentContainerStyle}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={() => (
            <View>
              <MainButton
                onPress={() => {
                  navigation.navigate(routes?.main?.changePassword);
                }}
                title={'Change Password'}
                style={{
                  marginTop: spacing.medium,
                  marginBottom: spacing.xxlarge,
                }}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default MyProfile;
