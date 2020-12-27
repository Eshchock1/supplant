import { createAppContainer } from 'react-navigation';
import CreateAccountPage from '../screens/createAccountPage';
import LoginPage from '../screens/loginPage';
import SplashPage from '../screens/splashPage';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const LoginStack = SplashPage;

export default LoginStack;