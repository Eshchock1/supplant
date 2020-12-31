import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, SafeAreaView, View,  LogBox, } from "react-native";
import AppStack from "./navigators/appStack";

import { Provider } from "react-redux";
import { store } from "./store";

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  `Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.`
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
