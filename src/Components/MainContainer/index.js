import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const MainContainer = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    // marginHorizontal: 20, // Adjust side margins here
    marginVertical: 10, // Adjust vertical margins
  },
});

export default MainContainer;
