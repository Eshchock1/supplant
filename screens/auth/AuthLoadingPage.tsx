import React, { useEffect, } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import { SkypeIndicator } from "react-native-indicators";

import { types, actions } from "../../store";
import { connect, MapStateToProps } from "react-redux";

import {LoginNavProp} from '../../navigators/loginStack'

interface ComponentProps {
  navigation: LoginNavProp<'AuthLoading'>;
}
interface DispatchProps {}
interface StateProps {
  isLoggingIn: boolean;
  isVerifying: boolean;
}

type Props = ComponentProps & StateProps & DispatchProps;

const AuthLoadingPage = ({ isLoggingIn, isVerifying, navigation }: Props) => {
  useEffect(() => {
    if (!(isVerifying || isLoggingIn)) {
      navigation.replace("Login");
    }
  }, [isLoggingIn, isVerifying]);
  
  return (
    <View style={styles.container}>
      <SkypeIndicator
        color='#4ba023'
        size={
          (Dimensions.get("window").width + Dimensions.get("window").height) /
          10.8
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const mapStateToProps: MapStateToProps<StateProps, {}, types.RootState> = (
  state
) => ({
  isLoggingIn: state.user.isLoggingIn,
  isVerifying: state.user.isVerifying,
});
export default connect(mapStateToProps)(AuthLoadingPage);
