import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {
  useCreateChatMutation,
  useFetchMessagesQuery,
  useSendMessageMutation,
} from '../../../Api/chatApi';
import fonts from '../../../Assets/fonts';
import {appImages} from '../../../Assets/Images';
import Background from '../../../Components/Background';
import CustomHeader from '../../../Components/CustomHeader';
import MyIcons from '../../../Components/MyIcons';
import CustomText from '../../../Components/wrappers/Texts/CustomText';
import routes from '../../../Navigation/routes';
import {colors} from '../../../theme/colors';
import {font} from '../../../theme/styles';
import {formattedTime, LOG, makeApiCall} from '../../../Utils/helperFunctions';
import {styles} from './styles';
import EmptyDataComponent from '../../../Components/EmptyDataComponent';

const ChatDetails = ({route}) => {
  const params = route?.params;
  const loggedInUserId = useSelector(({auth}) => auth?.user?._id);

  LOG('chatId-params', params);
  const [inputText, setInputText] = useState('');

  const flatlistRef = useRef(null);
  const {data, isLoading, isFetching, refetch} = useFetchMessagesQuery(
    params?.chatId,
  );
  const [messages, setMessages] = useState([]);
  const [
    sendMessage,
    {isLoading: isSendMsgLoading, isFetching: isSendMsgFetching},
  ] = useSendMessageMutation();
  const [
    createChat,
    {isLoading: isCreateChatLoading, isFetching: isCreateChatFetching},
  ] = useCreateChatMutation();

  LOG('messages-getMessages', messages);
  console.log('flatlistRef', flatlistRef?.current);
  const user2 = data?.data?.filter(user => {
    return user?.sender?._id !== loggedInUserId;
  });

  // const user2Name = `${user2[0]?.sender?.firstName} ${user2[0]?.sender?.lastName}`;
  const user2Name = 'Tester 2';
  console.log('user2', user2);

  const handleSend = async () => {
    Keyboard.dismiss();
    if (inputText.trim()) {
      const newMessage = {
        chatId: params?.chatId,
        content: inputText,
      };
      if (messages?.length < 1) {
        let payload = {
          sender: loggedInUserId,
          receiver: params?.user2Id,
        };

        console.log('payload-for create chat', payload);

        const res = await makeApiCall(createChat, payload);
        if (res) {
          newMessage.chatId = res?.data?._id;
        }
        console.log('res-for-createChat', res);
      }
      const resSendMessage = await makeApiCall(sendMessage, newMessage);
      refetch();
      console.log('res', resSendMessage);
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };
  const renderItem = ({item}) => {
    const isUser1 = item?.sender?._id === loggedInUserId; // Boolean
    return (
      <View
        style={[
          styles.messageContainer,
          isUser1 ? styles.user1Container : styles.user2Container,
        ]}>
        <View
          style={[
            {width: '100%'},
            isUser1 ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'},
          ]}>
          <View
            style={[
              styles.messageBubble,
              isUser1 ? styles.user1Bubble : styles.user2Bubble,
            ]}>
            <CustomText
              style={styles.messageText}
              text={item.content}
              color={isUser1 ? colors.text.white : colors.text.black}
              font={fonts.q.regular}
              size={font.large}
            />
            <View style={isUser1 ? styles.triangle : styles.triangle2} />
          </View>
          <Text style={styles.messageTime}>
            {formattedTime(item.createdAt)}
          </Text>
        </View>
      </View>
    );
  };
  // useEffect(() => {
  //   flatlistRef.current?.scrollToEnd({animated: true});
  //   // Alert.alert('hjj');
  // }, [data?.data]);
  useEffect(() => {
    if (data?.data) {
      setMessages([...data.data].reverse());
    }
  }, [data?.data]);
  return (
    <Background>
      <CustomHeader routeName={routes.main.chatDetails} />
      <View style={styles?.profileContainer}>
        <View style={styles?.profileWrap}>
          {false ? (
            <FastImage
              source={appImages?.profile1}
              style={styles?.profileImage}
              resizeMode="cover"
            />
          ) : (
            <CustomText
              text={user2Name?.charAt(0).toUpperCase()}
              size={font?.xxlarge}
            />
          )}
        </View>
        <View style={styles.titleWrap}>
          <CustomText
            text={user2Name}
            font={fonts.g.regular}
            size={font.xxlarge}
          />
          {/* <View style={styles?.onlineStatusWrap}>
            <View style={styles?.round} />
            <CustomText
              text={'Online'}
              font={fonts.g.regular}
              size={font.medium}
            />
          </View> */}
        </View>
      </View>
      {messages.length > 0 ? (
        <FlatList
          ref={flatlistRef}
          data={messages}
          keyExtractor={(item, index) =>
            item?._id || item.createdAt || index.toString()
          }
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          inverted={true}
        />
      ) : (
        <EmptyDataComponent message="No chats found!" />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor={colors?.text.placeholder}
        />

        <TouchableOpacity onPress={() => handleSend()}>
          <MyIcons name={'send'} />
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default ChatDetails;
