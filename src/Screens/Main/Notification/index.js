import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Background from '../../../Components/Background';
import ChatListCard from '../../../Components/Cards/ChatListCard';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../Navigation/routes';
import {updatedNotification} from '../../../Utils/dummyData';
import CustomHeader from '../../../Components/CustomHeader';

const Notification = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <CustomHeader routeName={routes.main.notification} />
      <View>
        <FlatList
          data={updatedNotification}
          renderItem={({item}) => (
            <ChatListCard
              item={item}
              onPress={() => navigation.navigate(routes.main.chatDetails)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </Background>
  );
};

export default Notification;
