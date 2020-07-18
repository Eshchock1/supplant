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

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrortext] = useState("");

  loginUser = (email, password) => {
    var emailTrimmed = email.trim();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailTrimmed, password)
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setErrortext("Invalid email address");
        } else if (error.code === "auth/wrong-password") {
          setErrortext("Invalid password");
        } else if (error.code === "auth/user-not-found") {
          setErrortext("User not found");
        }
        console.log(error);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged");
        navigation.navigate("AppNavigator");
      }
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView // adjust the value here if you need more padding
        behavior="position"
        keyboardVerticalOffset={Platform.select({
          ios: () => 0,
          android: () => -(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/250),
        })()}
        style={styles.container}
      >
          <Text style={styles.logo}><Text style={{ color: "#6E6D74" }}>sup</Text>plant</Text>

            <Text style={styles.subtitle}>Track Your Carbon Footprint</Text>
        <Text style={styles.title}>Login</Text>
        <Form style={styles.signIn}>
          <Item floatingLabel style={{ borderColor: "#207A18", paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), }}>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
            />
          </Item>
          <Item floatingLabel style={{ borderColor: "#207A18", paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), }}>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </Item>
        </Form>
        <Text style={styles.errorText}>{errorText}</Text>
          
        <Button style={{backgroundColor:'#207A18', marginTop:0, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}} full onPress={()=> loginUser(email, password)}><Text style={{color:'white'}}>LOGIN</Text></Button>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}>
          <Text style={styles.bottomText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CreateAccountPage")}>
            
            <Text style={{ color: "#207A18" }}> Sign Up.</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent: "center", width:"100%",}}>
        <Image 
        style={{width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/360), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/360), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15)}}
        source={require('../assets/mainPlant.png')}/>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    paddingVertical: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  errorText: {
    color: "#ff6347",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),
    textAlign: "center",
    paddingBottom: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),
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
  },
  title: {
    color: "#30851b",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    // fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),
  },
  signIn: {
    paddingBottom: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),
  },
  bottomText: {
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    textAlign: "center",
  },
});

export default LoginPage;
