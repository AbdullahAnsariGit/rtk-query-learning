import Toast from 'react-native-toast-message';

export const showToast = message => {
  Toast.show({
    text1: message ? message : 'Toast Message',
  });
};
