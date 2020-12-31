import React, { useEffect } from "react";

// for some reason needs to import react at the top of everything
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

import { types, actions } from "../store";
import { connect, MapStateToProps } from "react-redux";
import { NavigationTabProp } from "react-navigation-tabs";

import HomeScreen from "../screens/HomePage";
import { CompositeNavigationProp } from "@react-navigation/native";
import { MainTabNavProp } from "./MainTabNavigator";

export type StackParamList = {
  Home: undefined;
  
};
export type HomeNavProp<T extends keyof StackParamList> = CompositeNavigationProp<
  StackNavigationProp<StackParamList, T>,
  MainTabNavProp<'Home'>
>;

interface ComponentProps {
  navigation: MainTabNavProp<'Home'>;
}
interface StateProps {}

type Props = ComponentProps & StateProps;

const Snack = createStackNavigator<StackParamList>();

const HomeStack = ({}: Props) => (
  <Snack.Navigator headerMode='none' initialRouteName='Home'>
    <Snack.Screen component={HomeScreen} name='Home'></Snack.Screen>
  </Snack.Navigator>
);

const mapStateToProps: MapStateToProps<StateProps, {}, types.RootState> = (
  state
) => ({});
export default connect(mapStateToProps)(HomeStack);
