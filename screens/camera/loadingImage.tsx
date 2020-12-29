import React, { useState, useEffect, Component } from "react";
import { StyleSheet, View, BackHandler, Dimensions } from "react-native";
import firebase from "../../firebase";

import { SkypeIndicator } from "react-native-indicators";

import { types, actions } from "../../store";
import { connect } from "react-redux";

import { CameraNavProp } from "../../navigators/cameraStack";

interface OwnProps {
  navigation: CameraNavProp<"LoadingImage">;
}

interface StateProps {
  image: string | null;
}
type Props = OwnProps & StateProps;

class LoadingPage extends React.Component<Props, {}> {
  public static defaultProps = {
    image: null,
  };
  handleBackButton = () => {
    return true;
  };

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    const imageResult = await this.PostImage();
    console.log({ imageResult });
    this.props.navigation.popToTop();
    this.props.navigation.jumpTo("Home");
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  async PostImage() {
    try {
      const image = this.props.image;
      console.log({ image: image?.substring(0, 20) });
      const imageResponse = await firebase.functions().httpsCallable("functionPostImage")({ name: "", image: image });
      return imageResponse.data;
    } catch (error) {
      console.log({ error });
      return error;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SkypeIndicator color='#494949' size={(Dimensions.get("window").width + Dimensions.get("window").height) / 10.8} />
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
