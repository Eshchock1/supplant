import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, SafeAreaView, View, YellowBox, } from "react-native";
import AppStack from "./navigators/appStack";

import { Provider } from "react-redux";
import { store } from "./store";

YellowBox.ignoreWarnings([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

const App = () => (
  <>
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <AppStack />
          <StatusBar style='auto' />
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
