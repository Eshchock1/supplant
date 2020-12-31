import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, SafeAreaView, View,  LogBox, } from "react-native";
import AppStack from "./navigators/appStack";

import { Provider } from "react-redux";
import { store } from "./store";

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

const App = () => (
  <>
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar style='auto' />
          <AppStack />
        </View>
      </SafeAreaView>
    </Provider>
  </>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
