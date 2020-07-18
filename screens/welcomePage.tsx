import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default class welcomePage extends Component {

    state = {
        name: firebase.auth().currentUser.displayName
    }

    signOut = () => {
        firebase.auth().signOut().then(() => console.log('Signed out'));
        this.props.navigation.navigate('SplashPage');
      }
      token = () => {
          firebase.auth().currentUser.getIdToken().then(function(idToken) {
            console.log({axios})
axios.get("https://google.com", {headers : `Bearer: ${idToken}`}).then(function(data){
  console.log(data);
}).catch(function(e){
  console.log(e)});              
}).catch(function(error) {
  console.log(error)
}
);
      }


      
render(){
  return (
      <View style={styles.container}>
      <Text style={styles.logo}><Text style={{color:'black',}}>Snap</Text> Smile</Text>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.name}>{this.state.name}</Text>
      <Button style={{backgroundColor:'#3975ff', marginTop:30,}} full rounded onPress={()=> this.signOut()}><Text style={{color:'white'}}>Sign Out</Text></Button>
      <Button style={{backgroundColor:'#3975ff', marginTop:30,}} full rounded onPress={()=> this.token()}><Text style={{color:'white'}}>Get Token</Text></Button>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:30,
    paddingVertical:40,
  },
  name:{
    color:'#3975ff',
    fontSize:28,
    paddingVertical:10, 
  },
  logo: {
    color:'#3975ff',
    fontSize:28,
    paddingBottom:10,
  },
  title:{
    color:'black',
    fontSize:38,
    fontWeight:'bold',
    paddingTop:20,
  },
});
