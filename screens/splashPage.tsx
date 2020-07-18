import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, Image} from 'react-native';
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
        style={{width:400, height:380, marginTop:40,}}
        source={require('../assets/good.png')}
      />
      <Button style={{backgroundColor:'#32A023', marginTop:20, borderRadius:12,}} full onPress={()=> navigation.navigate('LoginPage')}><Text style={{color:'white'}}>LOGIN</Text></Button>
      <Button style={{backgroundColor:'#F8F8F8', marginTop:20, borderRadius:12,}} full onPress={()=> navigation.navigate('CreateAccountPage')}><Text style={{color:'#494949'}}>SIGN UP</Text></Button>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:30,
    paddingVertical:20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    color: "#32A023",
    fontSize: 38,
    fontWeight: "bold",
    paddingTop: 20,
    // fontFamily:"roboto",
  },
  subtitle:{
    paddingTop:10,
    color:'#494949',
    fontSize:15,
  }
});

export default LoadingPage;