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
  <View style={{flex:0.3, padding:30, backgroundColor:"#4ba023"}}></View>
  <View style={{flex:0.7, backgroundColor:'#FDFDFD'}}></View>
  </View>
  <View style={{flex:1, marginTop:20, position:'absolute', top:0, bottom:0, left:0, right:0,}}>
  <Text style={styles.logo}>supplant</Text>
  <View style={{marginHorizontal:30, flex:0.5, borderRadius:15, marginTop:20, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
  
  <View style={{flex:0.35, flexDirection:'row',}}>
  <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
  <Image 
    style={{width:40, height:80,}}
    source={require('../assets/cactus.png')}
  />
  </View>
  <View style={{flex:0.8, paddingLeft:10, paddingTop:5, justifyContent:'center'}}>
  <View style={{flexDirection:'row', alignItems:'center'}}>
  <Text style={{color:'#494949', fontSize:27, fontWeight:'bold'}}>Cactus </Text>
  <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Scanned Items</Text>}><TouchableHighlight style={{paddingVertical:3, paddingHorizontal:5, borderRadius:30, backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:15,}}>10</Text></TouchableHighlight></Tooltip>
  </View>
  <Text style={{color:'#494949', fontSize:13,}}> Scan 5 more items to reach aloe</Text>
  <Progress.Bar style={{marginTop:10}} color={'#4ba023'} unfilledColor={'#D3D3D3'} borderWidth={0} height={10} progress={0.6} width={200} />
  </View>
  </View>
  <View style={{flex:0.65,}}>

  <View style={{flex:1, marginHorizontal:15, marginBottom:15, backgroundColor:"#4ba023", borderRadius:15, padding:15,}}>
    <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>NAME</Text>
    <Text style={{color:'white', fontSize:15, paddingTop:4,}}>Eshwar Chockalingam</Text>
    <Text style={{color:'white', fontSize:15, fontWeight:'bold', paddingTop:12}}>EMAIL</Text>
    <Text style={{color:'white', fontSize:15, paddingTop:4,}}>Eshchock1@gmail.com</Text>
    <TouchableOpacity><Text style={{color:'white', fontSize:15, fontWeight:'bold', paddingTop:12,}}><Feather name="edit-2" size={24} color="white" /> CHANGE PASSWORD</Text></TouchableOpacity>
  </View>
  </View>
  </View>
  <View style={{flex:0.5}}>
  
  <View style={{flexDirection:'row', marginTop:20, marginHorizontal:30, height:120, borderRadius:15, marginBottom:0, backgroundColor:"white", shadowColor: "#000", shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <View style={{flex:1,}}>
      <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:10,}}>
      <Text style={{color:'#6e6e6e', padding:10, fontSize:20, fontWeight:'bold'}}>Scan Analysis</Text>
    <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Green</Text>}><TouchableHighlight style={{marginTop:7, width:35, height:35, paddingVertical:3, paddingHorizontal:5, borderRadius:30, backgroundColor:'#4ba023',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:12,}}>70%</Text></TouchableHighlight></Tooltip>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Yellow</Text>}><TouchableHighlight style={{marginTop:7, width:35, height:35, paddingVertical:3, paddingHorizontal:5, marginHorizontal:5, borderRadius:30, backgroundColor:'#DAA520',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:12,}}>20%</Text></TouchableHighlight></Tooltip>
      <Tooltip backgroundColor="white" overlayColor="rgba(0,0,0,0.15)" skipAndroidStatusBar={false} popover={<Text>Red</Text>}><TouchableHighlight style={{marginTop:7, width:35, height:35, paddingVertical:3, paddingHorizontal:5, borderRadius:30, backgroundColor:'#de563e',justifyContent:'center',}}><Text style={{color:'white', textAlign:"center", fontWeight:'bold', fontSize:12,}}>10%</Text></TouchableHighlight></Tooltip>
    </View>
      <View style={{alignItems:'center',}}>
      <Progress.Bar style={{marginTop:10, position:'absolute', zIndex:10, borderRadius:20,}} color={'#de563e'} unfilledColor={'transparent'} borderWidth={0} height={30} progress={1} width={250} />
      <Progress.Bar style={{marginTop:10, position:'absolute', zIndex:15, borderRadius:20,}} color={'#DAA520'} unfilledColor={'transparent'} borderWidth={0} height={30} progress={0.9} width={250} />
      <Progress.Bar style={{marginTop:10, position:'absolute', zIndex:20, borderRadius:20,}} color={'#4ba023'} unfilledColor={'transparent'} borderWidth={0} height={30} progress={0.7} width={250} />
      </View>
      </View>
      </View>
  
  <Button style={{backgroundColor:'#4ba023', marginTop:30, marginHorizontal:30,shadowColor: "#000", shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}} full rounded onPress={()=> this.signOut()}><Text style={{color:'white'}}>Sign Out</Text></Button>
  </View>
  </View>
  </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal:30,
    // paddingVertical:40,
  },
  name:{
    color:'#4ba023',
    fontSize:28,
    paddingVertical:10, 
  },
  logo: {
    color: "white",
    marginHorizontal:30,
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
    // fontFamily:"roboto",
  },
  title:{
    color:'#494949',
    fontSize:38,
    fontWeight:'bold',
    paddingTop:20,
  },
});