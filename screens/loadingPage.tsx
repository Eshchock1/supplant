import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SkypeIndicator } from 'react-native-indicators';


const LoadingPage = ({navigation}) => {

useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged')
      navigation.navigate('AppNavigator')       
    }
    else {
        console.log('user not logged')
        navigation.navigate('SplashPage')       
    }
 })}, []);

return (
    <View style={styles.container}>
        <SkypeIndicator color='#3c77ff' size={100}/>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:30,
    paddingVertical:40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LoadingPage;