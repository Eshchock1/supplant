import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Camera from '../screens/camera'
import LoadingImage from '../screens/loadingImage'
import ImageConfirmation from '../screens/imageConfirmation'

const HomeStack = createStackNavigator({
    Camera: {
        screen: Camera,
        navigationOptions: {
            headerShown: false,
        }
    },
    LoadingImage: {
        screen: LoadingImage,
        navigationOptions: {
            headerShown: false,
        },
    },
    
    ImageConfirmation: {
        screen: ImageConfirmation,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    defaultNavigationOptions: {
        ...TransitionPresets.ModalPresentationIOS,
    },
    initialRouteName:'Camera',
});

export default createAppContainer(HomeStack);