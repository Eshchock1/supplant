import {createMaterialTopTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import {View} from 'react-native';
import WelcomePage from '../screens/welcomePage';
import Profile from '../screens/profile';
import CameraStack from './cameraStack';
import { AntDesign } from '@expo/vector-icons'; 
import Camera from '../screens/camera'

const AppNavigator = createMaterialTopTabNavigator({
    WelcomePage: {screen: WelcomePage,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="home" size={27} color={tintColor} />)        
            }
    },
    Camera: {screen: CameraStack,
        navigationOptions: {
            tabBarVisible:false,
            tabBarIcon: ({tintColor}) => (
                <View style={{marginTop:-10,marginLeft:-8, height:50, width:50,}}><AntDesign name="pluscircle" size={50}  color={tintColor} /></View>)}
    },
    Profile: {screen: Profile,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="user" size={27} color={tintColor} />)
        }
    },
}, {
    initialRouteName: 'WelcomePage',
    tabBarPosition: 'bottom',
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
    }
    });


    CameraStack.navigationOptions = ({ navigation }) => {

        let swipeEnabled = true;
    
        let routeName = navigation.state.routes[navigation.state.index].routeName
        console.log(routeName)

        if (routeName === 'LoadingImage') {
            swipeEnabled = false
        }

        return {
            swipeEnabled
        }
    }

export default createAppContainer(AppNavigator);