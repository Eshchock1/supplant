import React from 'react';

// for some reason needs to import react at the top of everything
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import {createStackNavigator as createSnackNavigator} from '@react-navigation/stack'
import Camera from '../screens/camera'
import LoadingImage from '../screens/loadingImage'
import ImageConfirmation from '../screens/imageConfirmation'

export type CameraStackParamList = 
{
    Camera : undefined;
    LoadingImage : undefined;
    ImageConfirmation : undefined;
}

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