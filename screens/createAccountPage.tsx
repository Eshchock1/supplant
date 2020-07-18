import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
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
   ios: () => 0,
   android: () => -80
})()
}    style={styles.container}>
    <Text style={styles.logo}><Text style={{color:'black',}}>Snap</Text> Smile</Text>
    <Text>Dental Checkups with your mobile device</Text>
    <Text style={styles.title}>Create an Account</Text>
    <Form style={styles.signIn}>
    <Item floatingLabel style={{borderColor:"#3975ff"}}>
        <Label>Full Name</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText= {(name) => setName(name)}
        />
      </Item>
      <Item floatingLabel style={{borderColor:"#3975ff"}}>
        <Label>Email</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText= {(email) => setEmail(email)}
        />
      </Item>
      <Item floatingLabel style={{borderColor:"#3975ff"}}>
        <Label>Password</Label>
        <Input 
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText= {(password) => setPassword(password)}
        />
      </Item>
      <Item floatingLabel style={{borderColor:"#3975ff"}}>
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
    <Button style={{backgroundColor:'#3975ff'}} full rounded onPress={()=> signUpUser(email, password)}><Text style={{color:'white'}}>Create Account</Text></Button>
    <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'flex-end',}}>
    <Text style={styles.bottomText}>Already have an account? </Text>
    <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}><Text style={{color:'#3975ff'}}>Sign in</Text></TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  </TouchableWithoutFeedback>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:30,
    paddingVertical:40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  errorText: {
    color:'red',
    fontSize:15,
    textAlign:'center',
    paddingBottom:10,
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
  signIn:{
    paddingBottom:30,
  },
  bottomText:{
    paddingTop:30,
    textAlign:'center',
  }
});

export default CreateAccountPage;