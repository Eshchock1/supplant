import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  AsyncStorage,
  Keyboard,
  BackHandler,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import firebase from "../firebase";
import { Form, Item, Label, Input, Button } from "native-base";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SkypeIndicator } from "react-native-indicators";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import FormData from "form-data";

export default class LoadingPage extends React.Component {
  handleBackButton = () => {
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    setTimeout(() => {
      this.props.navigation.navigate("Camera");
      this.props.navigation.navigate("WelcomePage");
    }, 2000);
    this.getImageFromStorage("pic");
    this.bruh();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  state = {
    image: FileSystem.documentDirectory,
  };

  async getImageFromStorage(imageKey: string) {
    let value = await AsyncStorage.getItem(imageKey);
    this.setState({ image: value });
  }

  formData = () => {
    const form = new FormData();
    form.append("image", {
      uri: this.state.image,
      type: "image/jpg",
      name: "pic.jpg",
    });
    axios
      .post(
        "https://us-central1-supplant-44e15.cloudfunctions.net/api/foodUpload",
        form,
        {
          headers: {
            "content-type": "multipart/formdata",
          },
        }
      )
      .then((bruh) => {
        console.log(bruh);
      });
  };

  bruh = () => {
    firebase
      .auth()
      .currentUser?.getIdToken()
      .then(async (idToken) => {
        try {
          const form = new FormData();
          form.append("image", {
            uri: this.state.image,
            type: "image/jpg",
            name: "pic.jpg",
          });
          axios
            .post(
              "https://us-central1-supplant-44e15.cloudfunctions.net/api/foodUpload",
              form,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${idToken}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
            })
            .catch((e) => {
              console.log(e);
            });
          const a = await axios.get(
            "https://us-central1-supplant-44e15.cloudfunctions.net/api/hello",
            {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          );
          // console.log(a.data);
        } catch (error) {
          console.log({ error }, Object.entries(error));
        }

        console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
      });
  };

  // const bruh = (dispatch) => {
  //   axios.post('https://us-central1-supplant-44e15.cloudfunctions.net/api/foodUpload', data, {
  //     headers: {
  //       'accept': 'application/json',
  //       'Accept-Language': 'en-US,en;q=0.8',
  //       'Content-Type': multipart/form-data; boundary=${data._boundary},
  //     }
  //   })
  //     .then((response) => {
  //       //handle success
  //     }).catch((error) => {
  //       //handle error
  //     });
  //   };}

  render() {
    return (
      <View style={styles.container}>
        <SkypeIndicator
          color='#494949'
          size={
            (Dimensions.get("window").width + Dimensions.get("window").height) /
            10.8
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
