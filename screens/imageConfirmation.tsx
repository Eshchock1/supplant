import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, AsyncStorage, Keyboard, Image, ScrollView, Dimensions} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SkypeIndicator } from 'react-native-indicators';
import * as FileSystem from "expo-file-system";
import { AntDesign } from '@expo/vector-icons'; 
const LoadingPage = ({navigation}) => {

    let [image, setImage] = useState(FileSystem.documentDirectory);

  async function getImageFromStorage(imageKey: string) {
    let value = await AsyncStorage.getItem(imageKey);
    setImage(value);
  }
  getImageFromStorage("pic");

return (
    <View style={styles.container}>
      {/* <Text style={styles.logo}>Use Image?</Text> */}
        <TouchableOpacity activeOpacity={0.9}
        style={{shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        
        elevation: 5,
        width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/300),
              height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/400),
              borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),}}>
            <Image
            source={{
              uri: image,
            }}
            style={{
              width: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/300),
              height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/400),
              borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),
            }}
          />
        </TouchableOpacity>
        
          <View style={{flexDirection:'row', justifyContent:'space-between', width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/200), paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40),}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign name="close" size={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/60)} color="#494949" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("LoadingImage")}>
        <AntDesign name="check" size={(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/60)} color="#494949" />
        </TouchableOpacity>
          </View>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // paddingVertical:30,
    // paddingHorizontal:30,
    justifyContent: 'center',
  },
  logo: {
    color: "#3b3b3b",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/35),
    paddingBottom: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/40),
    textAlign:'center',
  },
});

export default LoadingPage;