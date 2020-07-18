import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import axios from 'axios';

export default class Camera extends Component {

render(){
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Camera</Text>
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
