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
import { NavigationTabProp } from "react-navigation-tabs";

import {types, actions} from '../store';
import {connect} from 'react-redux'; 

interface OwnProps {
  navigation: NavigationTabProp;
}

interface StateProps {
  image : string | null;
}
type Props = OwnProps & StateProps;

class LoadingPage extends React.Component<Props, {}> {
  public static defaultProps = {
    image : null
  };
  handleBackButton = () => {
    return true;
  };

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    const imageResult = await this.PostImage();
    console.log({imageResult})
    this.props.navigation.navigate("Camera");
    this.props.navigation.navigate("Welcome");
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  state : {image : string | null } = {
    image: null,
  };


  async PostImage() {
    try {
      const image = this.props.image;
      console.log(image?.substring(0, 20));
      const imageResponse = await firebase
        .functions()
        .httpsCallable("functionPostImage")({ name: "", image: image });

      const imageURL = imageResponse.data.imageURL as string;
      const fileName = imageResponse.data.fileName as string;
      return { imageURL, fileName };
    } catch (error) {
      console.log({ error });
      return error;
    }
  }

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

const mapStateToProps = (state: types.RootState) => ({
  image: state.camera.image,
});

export default connect(mapStateToProps)(LoadingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
