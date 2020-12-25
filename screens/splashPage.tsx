import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import firebase from "../firebase";
import { Form, Item, Label, Input, Button } from "native-base";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { SignInGoogle } from "../utils/SignInGoogle";
import { SocialIcon } from "react-native-elements";

const LoadingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={{ color: "#6E6D74" }}>sup</Text>plant
      </Text>
      <Text style={styles.subtitle}>Track Your Carbon Footprint</Text>
      <Image style={styles.img} source={require("../assets/splashPlant.png")} />

      <SocialIcon
        title={"Sign In With Google"}
        button={true}
        type={"google"}
        light
        raised
        onPress={SignInGoogle}
        // Right now there is an error where it will says
        // 'Cannot start new task while another task is currently in progress'
        // If the login button is pressed two times in a row. Disable the button after the first press.
        // TODO: Implement Error Text below the button.
        style={{
          width: 208,
          height: 48,
          ...styles.loginButton,
        }}></SocialIcon>
      <Text style={styles.errorText}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 20),
    borderRadius:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 30),
    paddingVertical:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 20),
    alignItems: "center",
    // justifyContent: 'center',
  },
  errorText: {
    color: "#ff6347",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 15),
    textAlign: "center",
    paddingBottom:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 10),
  },
  img: {
    width:
      (Dimensions.get("window").width + Dimensions.get("window").height) / 2.7,
    height:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 380),
    marginTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 40),
  },
  logo: {
    color: "#4ba023",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 38),
    fontWeight: "bold",
    paddingTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 20),
    // fontFamily:"roboto",
  },
  subtitle: {
    paddingTop:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 10),
    color: "#494949",
    fontSize:
      (Dimensions.get("window").width + Dimensions.get("window").height) /
      (1080 / 15),
  },
});

export default LoadingPage;
