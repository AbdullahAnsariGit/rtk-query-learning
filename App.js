import React, { useEffect } from "react";
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import Navigator from "./src/Navigation/Navigator";

import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import fonts from "./src/Assets/fonts";
import CustomText from "./src/Components/wrappers/Texts/CustomText";
import { persistor, store } from "./src/Store/store";
import { colors } from "./src/theme/colors";
import { font } from "./src/theme/styles";

function App() {
  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: colors.theme.black,
    flex: 1,
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === "android") {
        try {
          const grants = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.CAMERA,
          ]);

          console.log("Permissions:", grants);

          if (
            grants[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants[PermissionsAndroid.PERMISSIONS.CAMERA] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log("Permissions granted");
          } else {
            console.log("All required permissions not granted");
          }
        } catch (err) {
          console.warn("Permission request error:", err);
        }
      }
    };

    requestPermissions();
  }, []);
  const toastConfig = {
    success: (internalState) => (
      <View style={[styles.toastContainer, styles.success]}>
        <CustomText
          numberOfLines={2}
          style={styles.toastText}
          text={internalState.text1}
          font={fonts.e.medium}
        />
      </View>
    ),
    error: (internalState) => (
      <View style={[styles.toastContainer, styles.error]}>
        <CustomText
          numberOfLines={1}
          style={styles.toastText}
          text={internalState.text1}
        />
      </View>
    ),
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            barStyle={"light-content"}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Navigator />
          <Toast topOffset={70} config={toastConfig} />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  toastContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 20,
    padding: 8,
    borderWidth: 0.4,
    borderColor: colors?.theme?.secondary,
    borderRadius: 100,
    borderStyle: "solid",
  },
  toastText: {
    color: "white",
    fontSize: font?.small,
    textAlign: "center",
    fontFamily: fonts.e.light,
  },
  success: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  error: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});
