import React from 'react';

// for some reason needs to import react at the top of everything
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import {createStackNavigator as createSnackNavigator, StackNavigationProp} from '@react-navigation/stack'
import BarcodeScanner from '../screens/camera/barcodeScanner';
import Camera from '../screens/camera/camera'
import LoadingImage from '../screens/camera/loadingImage'
import ImageConfirmation from '../screens/camera/imageConfirmation'
import { CompositeNavigationProp } from '@react-navigation/native';
import { MainTabNavProp } from './MainTabNavigator';


export type CameraStackParamList = 
{
    Camera : undefined;
    LoadingImage : undefined;
    ImageConfirmation : undefined;
}
export type CameraNavProp<T extends keyof CameraStackParamList> = CompositeNavigationProp<
  StackNavigationProp<CameraStackParamList, T>,
  MainTabNavProp<'Camera'>
>;

const Snack = createSnackNavigator<CameraStackParamList>();

const CameraSnack = () => 
(
    <Snack.Navigator headerMode="none" initialRouteName="Camera" >
        <Snack.Screen component={Camera} name="Camera" ></Snack.Screen>
        <Snack.Screen component={LoadingImage} name="LoadingImage"></Snack.Screen>
        <Snack.Screen component={ImageConfirmation} name="ImageConfirmation"></Snack.Screen>
    </Snack.Navigator>
)

export default CameraSnack;