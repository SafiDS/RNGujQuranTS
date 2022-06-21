import React from 'react';
// Third Party
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Splash from 'src/modules/splash/components';
import Home from 'src/modules/home/components/home';

// Utils
import { Screens } from 'src/values/Constants';


const Stack = createNativeStackNavigator();

const AppRouter = props => {
    return AppStack(props);
};

const AppStack = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Screens.SPLASH}
                screenOptions={({navigation}) => {
                    return {
                        detachPreviousScreen: !navigation.isFocused(),
                        headerShown: false,
                    };
                }}>
                <Stack.Screen name={Screens.SPLASH} component={Splash} />
                <Stack.Screen name={Screens.HOME} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRouter;
