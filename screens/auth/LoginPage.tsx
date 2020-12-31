import React, { FC, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { SocialIcon } from "react-native-elements";

import { types, actions } from "../../store";
import { connect, MapStateToProps } from "react-redux";

import { LoginNavProp } from "../../navigators/loginStack";

const LoginGoogle = actions.user.LoginGoogleAction;
interface ComponentProps {
  navigation: LoginNavProp<"Login">;
}

interface DispatchProps {
  LoginGoogle: () => any;
}
interface StateProps {
  isLoggingIn: boolean;
  isVerifying: boolean;
  errorText: string | null;
}

type Props = ComponentProps & StateProps & DispatchProps;

const LoadingPage = ({ LoginGoogle, isLoggingIn, isVerifying, navigation, errorText }: Props) => {
  useEffect(() => {
    console.log("USE EFFECT IS LOGGING IN ", {isLoggingIn, isVerifying});
    if (isVerifying || isLoggingIn) {
      navigation.replace("AuthLoading");
    }
  }, [isLoggingIn, isVerifying]);
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={{ color: "#6E6D74" }}>sup</Text>plant
      </Text>
      <Text style={styles.subtitle}>Track Your Carbon Footprint</Text>
      <Image style={styles.img} source={require("../../assets/splashPlant.png")} />

      <SocialIcon
        title={"Sign In With Google"}
        button={true}
        type={"google"}
        light
        raised
        disabled={isVerifying || isLoggingIn}
        onPress={LoginGoogle}
        style={{
          width: 208,
          height: 48,
          ...styles.loginButton,
        }}></SocialIcon>
      <Text style={styles.errorText}>{errorText || ""}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
    borderRadius: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 30),
    paddingVertical: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
    alignItems: "center",
    // justifyContent: 'center',
  },
  errorText: {
    color: "#ff6347",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 15),
    textAlign: "center",
    paddingBottom: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 10),
  },
  img: {
    width: (Dimensions.get("window").width + Dimensions.get("window").height) / 2.7,
    height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 380),
    marginTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 40),
  },
  logo: {
    color: "#4ba023",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 20),
    // fontFamily:"roboto",
  },
  subtitle: {
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 10),
    color: "#494949",
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080 / 15),
  },
});

const mapStateToProps: MapStateToProps<StateProps, {}, types.RootState> = (state) => ({
  isLoggingIn: state.user.isLoggingIn,
  isVerifying: state.user.isVerifying,
  errorText: state.user.loginError || state.user.logoutError,
});

export default connect(mapStateToProps, { LoginGoogle })(LoadingPage);
