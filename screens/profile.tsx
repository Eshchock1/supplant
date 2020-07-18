import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import axios from 'axios';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';

export default class Camera extends Component {

  state = {
    name: firebase.auth().currentUser.displayName,
    userData: 0,
}

signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('SplashPage');
  }
//   token = () => {
//       firebase.auth().currentUser.getIdToken().then(function(idToken) {
//         console.log({axios})
// axios.get("https://google.com", {headers : `Bearer: ${idToken}`}).then(function(data){
// console.log(data);
// }).catch(function(e){
// console.log(e)});              
// }).catch(function(error) {
// console.log(error)
// }
// );
//   }

userData = async () => {
  const userData = await firebase.firestore().collection('users').doc(firebase.auth().currentUser?.uid).get();
  console.log(userData.data());
  this.setState({userData: userData.data()?.progressionExp
})
}

render(){
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Profile {'\n \n'}{this.state.name}</Text>
  <Text>{this.state.userData}</Text>
      <Button style={{backgroundColor:'#4ba023', marginTop:30,}} full rounded onPress={()=> this.signOut()}><Text style={{color:'white'}}>Sign Out</Text></Button>
      <Button style={{backgroundColor:'#4ba023', marginTop:30,}} full rounded onPress={()=> this.userData()}><Text style={{color:'white'}}>User Data</Text></Button>
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
  title:{
    color:'#494949',
    fontSize:38,
    fontWeight:'bold',
    paddingTop:20,
  },
});
