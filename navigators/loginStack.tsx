import React, { useEffect } from "react";

import AuthLoading from "../screens/auth/AuthLoadingPage";
import LoginPage from "../screens/auth/LoginPage";

import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

import { types, actions } from "../store";
import { connect, MapStateToProps } from "react-redux";
import { RootNavProp } from "./appStack";
import { CompositeNavigationProp } from "@react-navigation/native";

export type StackParamList = {
  Login: undefined;
  AuthLoading: undefined;
};

export type LoginNavProp<T extends keyof StackParamList> = CompositeNavigationProp<
  StackNavigationProp<StackParamList, T>,
  RootNavProp<'LoginStack'>
>;

interface ComponentProps {
  navigation: RootNavProp<'LoginStack'>;
}
interface StateProps {
  isAuthenticated: boolean;
}

type Props = ComponentProps & StateProps;

const Snack = createStackNavigator<StackParamList>();

const LoginStack = ({ isAuthenticated, navigation }: Props) => {
  useEffect(() => {
    if (isAuthenticated) {
      navigation.replace("MainTabNavigator");
    }
  }, [isAuthenticated]);

  return (
    <Snack.Navigator headerMode='none' initialRouteName='AuthLoading'>
      <Snack.Screen component={LoginPage} name='Login'></Snack.Screen>
      <Snack.Screen component={AuthLoading} name='AuthLoading'></Snack.Screen>
    </Snack.Navigator>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, types.RootState> = (
  state
) => ({
  ...state.user,
});
export default connect(mapStateToProps)(LoginStack);
