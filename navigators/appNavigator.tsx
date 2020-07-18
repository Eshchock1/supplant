import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomePage from '../screens/welcomePage';
import LoginPage from '../screens/loginPage';

const AppNavigator = createStackNavigator({
    welcomePage:{
        screen:WelcomePage,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
    },
});

export default createAppContainer(AppNavigator);