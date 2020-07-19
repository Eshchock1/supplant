import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, Image, Dimensions} from 'react-native';
import axios from 'axios';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import * as Progress from 'react-native-progress';
import { Tooltip} from 'react-native-elements';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'; 
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
  //     <View style={styles.container}>
  //     <Text style={styles.title}>Profile {'\n \n'}{this.state.name}</Text>
  // <Text>{this.state.userData}</Text>
  //     <Button style={{backgroundColor:'#4ba023', marginTop:30,}} full rounded onPress={()=> this.signOut()}><Text style={{color:'white'}}>Sign Out</Text></Button>
  //     <Button style={{backgroundColor:'#4ba023', marginTop:30,}} full rounded onPress={()=> this.userData()}><Text style={{color:'white'}}>User Data</Text></Button>
  //     </View>
      
  
  <View style={styles.container}>
  <View style={{flex:1, position:'absolute', top:0, bottom:0, left:0, right:0,}}>
  <View style={{flex:0.3, padding:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:"#4ba023"}}></View>
  <View style={{flex:0.7, backgroundColor:'#FDFDFD'}}></View>
  </View>
  <View style={{flex:1, marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), position:'absolute', top:0, bottom:0, left:0, right:0,}}>
  <Text style={styles.logo}>sup<Text>plant</Text></Text>
  <View style={{marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), flex:0.5, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
  
  <View style={{flex:0.35, flexDirection:'row',}}>
  <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
  <Image 
    style={{width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/80),}}
    source={require('../assets/cactus.png')}
  />
  </View>
  <View style={{flex:0.8, paddingLeft:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), justifyContent:'center'}}>
  <View style={{flexDirection:'row', alignItems:'center'}}>
  <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/27), fontWeight:'bold'}}>Cactus </Text>
  <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Scanned Items</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/16),}}>10</Text></TouchableHighlight></Tooltip>
  </View>
  <Text style={{color:'#494949', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/13),}}> Scan 5 more items to reach aloe</Text>
  <Progress.Bar style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10)} progress={0.6} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/200)} />
  </View>
  </View>
  <View style={{flex:0.65,}}>

  <View style={{flex:1, marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), marginBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), backgroundColor:"#4ba023", borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), padding:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),}}>
    <Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), fontWeight:'bold'}}>NAME</Text>
    <Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/4),}}>Eshwar Chockalingam</Text>
    <Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), fontWeight:'bold', paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12)}}>EMAIL</Text>
    <Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/4),}}>Eshchock1@gmail.com</Text>
    <TouchableOpacity><Text style={{color:'white', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), fontWeight:'bold', paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}}><Feather name="edit-2" size={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/24)} color="white" /> CHANGE PASSWORD</Text></TouchableOpacity>
  </View>
  </View>
  </View>
  <View style={{flex:0.5}}>
  
  <View style={{flexDirection:'row', marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/120), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15), marginBottom:0, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:1,}}>
      <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),}}>
      <Text style={{color:'#6e6e6e', padding:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), fontWeight:'bold'}}>Scan Analysis</Text>
    <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Green</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}}>70%</Text></TouchableHighlight></Tooltip>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Yellow</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#DAA520',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}}>20%</Text></TouchableHighlight></Tooltip>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Red</Text>}><TouchableHighlight style={{marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/7), width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35), paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/3), paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/5), borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), backgroundColor:'#de563e',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}}>10%</Text></TouchableHighlight></Tooltip>
    </View>
      <View style={{alignItems:'center',}}>
      <Progress.Bar style={{marginTop:10, position:'absolute', zIndex:10, borderRadius:20,}} color={'#de563e'} unfilledColor={'transparent'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)} progress={1} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/250)} />
      <Progress.Bar style={{marginTop:10, position:'absolute', zIndex:15, borderRadius:20,}} color={'#DAA520'} unfilledColor={'transparent'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)} progress={0.9} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/250)} />
      <Progress.Bar style={{marginTop:10, position:'absolute', zIndex:20, borderRadius:20,}} color={'#4ba023'} unfilledColor={'transparent'} borderWidth={0} height={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30)} progress={0.7} width={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/250)} />
      </View>
      </View>
      </View>
  
  <Button style={{backgroundColor:'#4ba023', marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20), marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),shadowColor: "#000", shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}} full rounded onPress={()=> this.signOut()}><Text style={{color:'white'}}>Sign Out</Text></Button>
  </View>
  </View>
  </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    color: "white",
    marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
  },
});