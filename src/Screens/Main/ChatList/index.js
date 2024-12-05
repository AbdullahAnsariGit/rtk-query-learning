// import React, {useState} from 'react';
// import {Alert, FlatList, View} from 'react-native';
// import Background from '../../../Components/Background';
// import ChatListCard from '../../../Components/Cards/ChatListCard';
// import CustomHeader from '../../../Components/CustomHeader';
// import InputField from '../../../Components/InputField';
// import routes from '../../../Navigation/routes';
// import {updatedChatData} from '../../../Utils/dummyData';
// import {useNavigation} from '@react-navigation/native';
// import {useFetchChatsListQuery, useFetchChatsQuery} from '../../../Api/chatApi';
// import {LOG, useDebounce} from '../../../Utils/helperFunctions';
// import SearchOverlay from '../../../Components/Searchbar/AnimtedSearchBarOverlay';
// import {useGetAllUserQuery} from '../../../Api/userApiSlice';

// const ChatList = () => {
//   const navigation = useNavigation();
//   const {data, isLoading, isFetching} = useFetchChatsListQuery();
//   const {
//     data: allUsers,
//     isLoading: isUsers,
//     isFetching: isUserFetch,
//   } = useGetAllUserQuery(userParams);

//   const [search, setSearch] = useState('');
//   const [focused, setFocused] = useState(false);
//   const [userParams, setUserParams] = useState({
//     limit: 10,
//     page: 1,
//     keyword: '',
//     chatInfo: true,
//   });

//   LOG('allUsers', allUsers);
//   const onFocus = () => setFocused(true);
//   const onBlur = () => setFocused(false);
//   // const handleSearchChange = text => {
//   //   LOG('text', text);
//   //   setSearch(text);
//   // };

//   // Implement debounce
//   const handleSearch = query => {
//     LOG('query', query);
//     if (query) {
//       setUserParams(prev => ({...prev, keyword: query}));
//       // setFilteredData(filtered);
//     } else {
//       // setFilteredData(data); // Reset to the full list when the query is empty
//     }
//   };

//   const debouncedSearch = useDebounce(handleSearch, 2000);

//   const filteredChatData = updatedChatData.filter(chat =>
//     chat.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   LOG('data', data);

//   const renderChatList = () => {
//     return (
//       <FlatList
//         data={filteredChatData}
//         renderItem={({item}) => {
//           LOG('item-item', item);
//           return (
//             <ChatListCard
//               item={item}
//               onPress={() => navigation.navigate(routes.main.chatDetails)}
//             />
//           );
//         }}
//         keyExtractor={item => item.id}
//       />
//     );
//   };
//   const chatData = [
//     {id: '1', name: 'John Doe'},
//     {id: '2', name: 'Jane Smith'},
//     {id: '3', name: 'Alice Johnson'},
//     {id: '4', name: 'Bob Brown'},
//     // More items can be added here...
//   ];

//   const handleItemSelect = item => {
//     console.log('Selected Item:', item);
//   };

//   return (
//     <Background>
//       <View>
//         <CustomHeader routeName={routes.tab.chatList} />
//         <InputField
//           leftIcon="search"
//           placeholder={'Search Here....'}
//           onChangeText={text => {
//             setSearch(text);
//             debouncedSearch(text);
//           }}
//           value={search}
//           onFocusCallBack={() => Alert.alert('Focus')}
//           onBlurCallBack={() => Alert.alert('Blur')}
//           returnKeyType="search"
//           style={{width: '100%'}}
//         />

//         {renderChatList()}
//       </View>
//     </Background>
//   );
// };

// export default ChatList;

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useFetchChatsListQuery} from '../../../Api/chatApi';
import {useGetAllUserQuery} from '../../../Api/userApiSlice';
import Background from '../../../Components/Background';
import ChatListCard from '../../../Components/Cards/ChatListCard';
import CustomHeader from '../../../Components/CustomHeader';
import InputField from '../../../Components/InputField';
import routes from '../../../Navigation/routes';
import {updatedChatData} from '../../../Utils/dummyData';
import {LOG, timeAgo, useDebounce} from '../../../Utils/helperFunctions';
import ActivityLoader from '../../../Components/ActivityLoader';
import {colors} from '../../../theme/colors';
import EmptyDataComponent from '../../../Components/EmptyDataComponent';
import CustomModal from '../../../Components/Modal/SearchModal';
import MainButton from '../../../Components/Buttons/MainButton';
import MyIcons from '../../../Components/MyIcons';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import {vw} from '../../../theme/units';

import fonts from '../../../Assets/fonts';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const ChatList = () => {
  const navigation = useNavigation();
  const {data, isLoading, isFetching} = useFetchChatsListQuery();
  const loggedInUserId = useSelector(({auth}) => auth?.user?._id);
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const [isModal, setIsModal] = useState(false);
  // const [userParams, setUserParams] = useState({
  //   limit: 5,
  //   page: 1,
  //   keyword: '',
  //   chatInfo: true,
  // });
  LOG('loggedInUserId', loggedInUserId);

  // const {
  //   data: allUsers,
  //   isLoading: isUsers,
  //   isFetching: isUserFetch,
  // } = useGetAllUserQuery();
  // LOG('userParams', userParams);

  // LOG('allUsers', allUsers?.data?.docs);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  // Implement debounce
  const handleSearch = query => {
    LOG('query', query);
    if (query) {
      setUserParams(prev => ({...prev, keyword: query}));
    } else {
    }
  };

  // const debouncedSearch = useDebounce(handleSearch, 10);

  // const filteredChatData = updatedChatData.filter(chat =>
  //   chat.name.toLowerCase().includes(search.toLowerCase()),
  // );

  // const filteredUserData = allUsers?.data?.docs?.filter(chat => {
  //   console.log('chatchatchat', chat);
  //   return chat?.firstName?.toLowerCase().includes(search.toLowerCase());
  // });

  LOG('data', data);

  const RenderChatList = () => {
    return (
      <FlatList
        data={data?.data?.docs}
        renderItem={({item}) => {
          LOG('item-item', item);
          const otherUser =
            item.sender[0]._id === loggedInUserId
              ? item.receiver[0]
              : item.sender[0];

          console.log('otherUser', otherUser);
          const name = `${otherUser?.firstName} ${otherUser?.lastName}`;
          const messageTime =
            item?.latestMessage[0]?.createdAt || item?.createdAt;

          return (
            <ChatListCard
              name={name}
              message={item?.latestMessage[0]?.content}
              time={timeAgo(messageTime)}
              unreadCount={otherUser?.unreadCount}
              profileImage={otherUser.profileImage}
              onPress={() =>
                navigation.navigate(routes.main.chatDetails, {
                  chatId: item?._id,
                })
              }
            />
          );
        }}
        ListEmptyComponent={() => (
          <EmptyDataComponent message="No chat found!" />
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <Background>
      {/* <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{backgroundColor: 'red'}}> */}
      <View style={{flex: 1}}>
        <CustomHeader routeName={routes.tab.chatList} />
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles?.btnSearch}
          onPress={() => setIsModal(true)}>
          <MyIcons name={'search'} />
          <CustomText
            text="Search Here..."
            font={fonts?.e.light}
            color={colors?.text?.placeholder}
          />
        </TouchableOpacity>
        {/* <InputField
          leftIcon="search"
          placeholder={'Search Here....'}
          onChangeText={text => {
            setSearch(text);
            // debouncedSearch(text);
          }}
          value={search}
          onFocusCallBack={() => setFocused(true)}
          onBlurCallBack={() => setFocused(false)}
          onSubmitEditing={() => setFocused(false)}
          returnKeyType="search"
          style={{width: '100%'}}
        /> */}
        {!focused && <RenderChatList />}
        {/* {focused && (isUserFetch ? <ActivityLoader /> : <RenderUserlist />)} */}
        {/* <MainButton title={'Open Modal'} onPress={() => setIsModal(true)} /> */}
        <CustomModal
          visible={isModal}
          onClose={() => setIsModal(false)}
          onChatItemPress={(chatId, user2Id) => {
            setIsModal(false);
            setTimeout(() => {
              navigation.navigate(routes.main.chatDetails, {
                chatId,
                user2Id,
              });
            }, 200);
          }}
        />
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Background>
  );
};

export default ChatList;
