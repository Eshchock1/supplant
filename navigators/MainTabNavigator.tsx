import React, { useEffect } from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";

import { View } from "react-native";
import HomeStack, { StackParamList as HomeParams } from "./homeStack";
import Profile from "../screens/profile";
import CameraStack, { CameraStackParamList } from "./cameraStack";
import { AntDesign } from "@expo/vector-icons";
import { connect, MapStateToProps } from "react-redux";
import { types } from "../store";
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";

import { RootNavProp } from "./appStack";

export type MainTabParamList = {
  Home: NavigatorScreenParams<HomeParams> | undefined;
  Camera: NavigatorScreenParams<CameraStackParamList> | undefined;
  Profile: undefined;
};

export type MainTabNavProp<T extends keyof MainTabParamList> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<MainTabParamList, T>,
  RootNavProp<'MainTabNavigator'>
>;

// Tab Component Stuff
const Tab = createMaterialTopTabNavigator<MainTabParamList>();

const HomeIcon = ({ color }: { color: string }) => <AntDesign name='home' size={27} color={color} />;
const CameraIcon = ({ color }: { color: string }) => (
  <View style={{ marginTop: -10, marginLeft: -8, height: 50, width: 50 }}>
    <AntDesign name='pluscircle' size={50} color={color} />
  </View>
);
const ProfileIcon = ({ color }: { color: string }) => <AntDesign name='user' size={27} color={color} />;

const TabBar = (props: MaterialTopTabBarProps) => {
  if (props.state.index === 1) {
    return <></>;
  }
  return <MaterialTopTabBar {...props} ></MaterialTopTabBar>;
};
let TabNavigatorOptions: Partial<React.ComponentProps<typeof Tab.Navigator>>;

// Tab Component Props
interface ComponentProps {
  navigation: RootNavProp<'MainTabNavigator'>;
}
interface StateProps {
  isAuthenticated: boolean;
}

type Props = ComponentProps & StateProps;

const MainTabNavigator = ({ isAuthenticated, navigation }: Props) => {
  useEffect(() => {
    if (!isAuthenticated) {
      navigation.replace("LoginStack");
    }
  }, [isAuthenticated]);

  return (
    <Tab.Navigator {...TabNavigatorOptions} tabBar={TabBar}>
      <Tab.Screen name='Home' component={HomeStack} options={{ tabBarIcon: HomeIcon }} />
      <Tab.Screen name='Camera' component={CameraStack} options={{ tabBarIcon: CameraIcon }} />
      <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: ProfileIcon }} />
    </Tab.Navigator>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, types.RootState> = (state) => ({
  ...state.user,
});

export default connect(mapStateToProps)(MainTabNavigator);

TabNavigatorOptions = {
  initialRouteName: "Home",
  tabBarPosition: "bottom",
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: "#4ba023",
    inactiveTintColor: "#4ba023",
    showIcon: true,
    showLabel: false,
    iconStyle: {
      width: 30,
      height: 30,
    },

    style: {
      backfaceVisibility: "hidden",
      backgroundColor: "white",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
    },
    indicatorStyle: {
      height: 3,
      backgroundColor: "white",
    },
  },
} as const;
