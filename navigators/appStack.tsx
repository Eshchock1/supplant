import React from "react";
import { createStackNavigator as createSnackNavigator, StackNavigationProp } from "@react-navigation/stack";
import LoginStack, {StackParamList as LoginParams} from "./loginStack";
import AppNavigator, {MainTabParamList} from "./MainTabNavigator";
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { RouteProp } from '@react-navigation/native';

// `NavigatorScreenParams` if you want to pass in arguments for the nested screen, `undefined` so that 
// if you just want to go to default screen, you can do `navigator.navigate('SCREEN_NAME')` with just 1 argument.
// Otherwise will require you to specify nested screen name every time you navigate.

export type RootStackParamList = {
  LoginStack: NavigatorScreenParams<LoginParams> | undefined;
  MainTabNavigator: NavigatorScreenParams<MainTabParamList> | undefined;
};


// Root Route and Navigation Props to allow for nested type checking with simpler imports -  
// only type argument needed is for the route name, instead of needing to pass `RootStackParamList` every time.

export type RootRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>
export type RootNavProp<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;

const Snack = createSnackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Snack.Navigator headerMode='none' initialRouteName="LoginStack">
      <Snack.Screen component={AppNavigator} name='MainTabNavigator' />
      <Snack.Screen component={LoginStack} name='LoginStack' />
    </Snack.Navigator>
  </NavigationContainer>
);

export default App;
