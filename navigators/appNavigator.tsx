import React from "react";
import { createMaterialTopTabNavigator, MaterialTopTabBar, MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

import { View } from "react-native";
import WelcomePage from "../screens/welcomePage";
import Profile from "../screens/profile";
import CameraStack from "./cameraStack";
import { AntDesign } from "@expo/vector-icons";

export type AppTabParamList = {
  Welcome: undefined;
  Camera: undefined;
  Profile: undefined;
};

const Tab = createMaterialTopTabNavigator<AppTabParamList>();

const TabNavigatorOptions: Partial<
  React.ComponentProps<typeof Tab.Navigator>
> = {
  initialRouteName: 'Welcome',
  tabBarPosition: 'bottom',
  swipeEnabled : false,
  tabBarOptions: {
      activeTintColor:'#4ba023',
      inactiveTintColor:'#4ba023',
      showIcon:true,
      showLabel:false,
      iconStyle: {
          width: 35,
          height: 30
      },

      style: {
          backfaceVisibility:'hidden',
          backgroundColor:'white',
          height: "9.5%",
          justifyContent:'center',
          position:'absolute',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,
          elevation: 24,
          bottom:0,
          left:0,
          right:0,
          zIndex:100,
      },
      indicatorStyle:{
          height:3,
          backgroundColor:'white',
      },
      
  },
} as const;

const WelcomeIcon = ({ color }: { color: string }) => (
  <AntDesign name='home' size={27} color={color} />
);
const CameraIcon = ({ color }: { color: string }) => (
  <View style={{ marginTop: -10, marginLeft: -8, height: 50, width: 50 }}>
    <AntDesign name='pluscircle' size={50} color={color} />
  </View>
);

const ProfileIcon = ({ color }: { color: string }) => (
  <AntDesign name='user' size={27} color={color} />
);

const TabBar = (props : MaterialTopTabBarProps) => {
  if(props.state.index === 1)
  {
    return (<></>)
  }
  return (<MaterialTopTabBar {...props}></MaterialTopTabBar>);
}

const Tabs = () => {
  return (
    <Tab.Navigator {...TabNavigatorOptions} tabBar={TabBar}>
      <Tab.Screen
        name='Welcome'
        component={WelcomePage}
        options={{ tabBarIcon: WelcomeIcon,  }}
      />
      <Tab.Screen
        name='Camera'
        component={CameraStack}
        options={{ tabBarIcon: CameraIcon, }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ tabBarIcon: ProfileIcon }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
