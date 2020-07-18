import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, Image, Dimensions} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
// import { SkypeIndicator } from 'react-native-indicators';


const LoadingPage = ({navigation}) => {

return (
    <View style={styles.container}>
    <Text style={styles.logo}><Text style={{ color: "#6E6D74" }}>sup</Text>plant</Text>
            <Text style={styles.subtitle}>Track Your Carbon Footprint</Text>
        <Image 
        style={styles.img}
        source={require('../assets/splashPlant.png')}
      />
      <Button style={{backgroundColor:'#4ba023', marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}} full onPress={()=> navigation.navigate('LoginPage')}><Text style={{color:'white'}}>LOGIN</Text></Button>
      <Button style={{backgroundColor:'#F8F8F8', marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}} full onPress={()=> navigation.navigate('CreateAccountPage')}><Text style={{color:'#494949'}}>SIGN UP</Text></Button>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  img:{
    width:(Dimensions.get("window").width + Dimensions.get("window").height) / 2.7, 
    height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/380), 
    marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40),
  },
  logo: {
    color: "#4ba023",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
    // fontFamily:"roboto",
  },
  subtitle:{
    paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),
    color:'#494949',
    fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),
  }
});

export default LoadingPage;