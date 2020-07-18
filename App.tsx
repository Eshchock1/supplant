import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View ,YellowBox} from 'react-native';
import AppStack from './navigators/appStack';
YellowBox.ignoreWarnings([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

export default class App extends Component {
  
render(){
  return (
    <View style={styles.container}>
    <AppStack />
      <StatusBar style="auto"/>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
