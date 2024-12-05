// CustomModal.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import InputField from '../InputField';
import ChatListCard from '../Cards/ChatListCard';
import EmptyDataComponent from '../EmptyDataComponent';
import {LOG} from '../../Utils/helperFunctions';
import {useGetAllUserQuery} from '../../Api/userApiSlice';
import {vh} from '../../theme/units';
import {colors} from '../../theme/colors';
import MyIcons from '../MyIcons';

const CustomModal = ({visible, onClose, title, content, onChatItemPress}) => {
  const {
    data: allUsers,
    isLoading: isUsers,
    isFetching: isUserFetch,
  } = useGetAllUserQuery({chatInfo: true});
  const [search, setSearch] = useState('');
  const filteredUserData = allUsers?.data?.docs?.filter(chat =>
    chat.firstName.toLowerCase().includes(search.toLowerCase()),
  );

  console.log('allUserslsls', allUsers?.data?.docs);
  const renderItem = ({item}) => {
    LOG('item-item-modal', item);
    let name = item?.firstName + ' ' + item?.lastName;
    return (
      <ChatListCard
        name={name}
        message={
          item?.chatInfo?.latestMessageDetails
            ? item?.chatInfo?.latestMessageDetails?.content
            : 'Last Message'
        }
        time={item?.time}
        unreadCount={item?.unreadCount}
        profileImage={item.profileImage}
        onPress={() => onChatItemPress(item?.chatInfo?._id, item?._id)}
      />
    );
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles?.backContainer}>
            <TouchableOpacity onPress={onClose} style={styles?.closeContainer}>
              <MyIcons name="back" />
            </TouchableOpacity>
          </View>
          {/* Title */}
          {title && <Text style={styles.title}>{title}</Text>}

          <InputField
            leftIcon="search"
            placeholder={'Search Here....'}
            onChangeText={text => {
              setSearch(text);
              // debouncedSearch(text);
            }}
            value={search}
            // onFocusCallBack={() => setFocused(true)}
            // onBlurCallBack={() => setFocused(false)}
            onSubmitEditing={() => setSearch('')}
            returnKeyType="search"
            style={{width: '100%'}}
          />
          {/* Content */}
          {content && <Text style={styles.content}>{content}</Text>}
          {/* 
          Close Button
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity> */}
          <FlatList
            data={filteredUserData}
            renderItem={renderItem}
            ListEmptyComponent={() => (
              <EmptyDataComponent message="No users found!" />
            )}
            keyExtractor={item => item.id}
            style={{width: '100%'}}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  modalContainer: {
    height: '100%',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: colors?.theme?.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  backContainer: {
    width: '100%',
  },
  closeContainer: {
    padding: 10,
  },
});

export default CustomModal;
