// src/utils/networkCheck.js
import NetInfo from '@react-native-community/netinfo';

export const checkNetworkConnectivity = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected; // Returns true if connected, false if not
};
