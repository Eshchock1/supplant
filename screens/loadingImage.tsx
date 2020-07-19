import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, BackHandler, Dimensions} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SkypeIndicator } from 'react-native-indicators';


export default class LoadingPage extends React.Component {
  handleBackButton =()=> {
    return true;
}

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    setTimeout(()=> {
    this.props.navigation.navigate('Camera')
    this.props.navigation.navigate('WelcomePage')
  }, 2000);
}

 componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}


render(){
return (
    <View style={styles.container}>
        <SkypeIndicator color='#494949' size={(Dimensions.get("window").width + Dimensions.get("window").height) / 10.8}/>
    </View>
)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

