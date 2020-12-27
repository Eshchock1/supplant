import React from 'react';
import { createStackNavigator as createSnackNavigator } from "@react-navigation/stack";
import LoginStack from "./loginStack";
import AppNavigator from "./appNavigator";
import { NavigationContainer } from '@react-navigation/native';
import {connect, MapStateToProps} from 'react-redux'; 
import {types} from '../store';

interface StateProps {
  signedIn: boolean;
}
const Snack = createSnackNavigator();

const App = (props: StateProps) => {
  const { signedIn } = props;
  return (
    <NavigationContainer>
      <Snack.Navigator headerMode='none'>
        {signedIn ? (
          <>
            <Snack.Screen component={AppNavigator} name='Main' />
            {/* <Snack.Screen component={Settings} name='Settings' /> */}
          </>
        ) : (
          <Snack.Screen component={LoginStack} name='Login' />
        )}
      </Snack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps : MapStateToProps<StateProps, {}, types.RootState>= (state: types.RootState) => ({
  signedIn : state.user.isAuthenticated,
});

export default connect(mapStateToProps)(App)