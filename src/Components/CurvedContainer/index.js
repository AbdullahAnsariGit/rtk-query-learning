import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

// Get the height of the current screen
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const CurvedContainer = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      {/* TextInput positioned inside the curved view */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.365,
  },
  canvas: {
    width: '100%', // Full width of the screen
  },
  inputContainer: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.35, // Adjust according to the new canvas height
    width: '80%',
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  nextButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#ff6600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CurvedContainer;
