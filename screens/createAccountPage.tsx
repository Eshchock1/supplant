import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, Image, Dimensions} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


const CreateAccountPage = ({navigation}) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorText, setErrortext] = useState('');

signUpUser = (email, password) => {
  var emailTrimmed = email.trim();
  var userName = name.trim();
  if (userName.length == 0) {
    setErrortext('Please enter a name')
  }
    else if (password.length < 8) {
      setErrortext('Password must be 8 or more characters')
    }
    else if (confirmPassword !== password) {
      setErrortext('Passwords do not match')
    }
    else {
      firebase.auth().createUserWithEmailAndPassword(emailTrimmed, password).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrortext('Email already in use')
        }
    
        else if (error.code === 'auth/invalid-email') {
          setErrortext('Invalid email address')
        }

        console.log(error);
      }).then((userInfo) =>{ userInfo.user.updateProfile({displayName: name}).then(firebase.auth().currentUser.reload()).then(() => {console.log(firebase.auth().currentUser.displayName)})})
    }
}

useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged')
      navigation.navigate('AppNavigator')          
    }
 })}, []);

return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView  // adjust the value here if you need more padding
  style = {{ flex: 1 }}
  behavior='position'
keyboardVerticalOffset={
Platform.select({
   ios: () => -(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/100),
   android: () => -(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/150)
})()
}    style={styles.container}>
    <Text style={styles.logo}><Text style={{ color: "#6E6D74" }}>sup</Text>plant</Text>
            <Text style={styles.subtitle}>Track Your Carbon Footprint</Text>
    <Text style={styles.title}>Sign Up</Text>
    <Form style={styles.signIn}>
    <Item floatingLabel style={{borderColor:"#207A18",paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/4),}}>
        <Label>Full Name</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText= {(name) => setName(name)}
        />
      </Item>
    <Item floatingLabel style={{borderColor:"#207A18",paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/4),}}>
        <Label>Email</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText= {(email) => setEmail(email)}
        />
      </Item>
    <Item floatingLabel style={{borderColor:"#207A18",paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/4),}}>
        <Label>Password</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText= {(password) => setPassword(password)}
        />
      </Item>
    <Item floatingLabel style={{borderColor:"#207A18",paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/4),}}>
        <Label>Confirm Password</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText= {(confirmPassword) => setConfirmPassword(confirmPassword)}
        />
      </Item>
    </Form>
    <Text style={styles.errorText}>{errorText}</Text>
      <Button style={{backgroundColor:'#207A18', marginTop:0, borderRadius:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12),}} full onPress={()=> signUpUser(email, password)}><Text style={{color:'white'}}>SIGN UP</Text></Button>
    <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'flex-end',}}>
    <Text style={styles.bottomText}>Already have an account? </Text>
    <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={{color:'#207A18'}}>Login.</Text></TouchableOpacity>
    </View>
    <View style={{flexDirection: "row", justifyContent: "center", width:"100%",}}>
        <Image 
        style={{width:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/330), height:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/330), marginTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/12)}}
        source={require('../assets/mainPlant.png')}/>
        </View>
  </KeyboardAvoidingView>
  </TouchableWithoutFeedback>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    paddingVertical:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),
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
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/10),
  },
  signIn:{
    paddingBottom:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/15),
  },
  bottomText:{
    paddingTop:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    textAlign:'center',
  }
});

export default CreateAccountPage;