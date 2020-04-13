import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screens/home';
import SignUp from './../screens/signUp';
import SignIn from './../screens/signIn';

const Stack = createStackNavigator();

class Navigator extends React.Component {
    render(){
        return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{header: () => null}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{header: () => null}} />
                <Stack.Screen name="SignIn" component={SignIn} options={{header: () => null}} />
              </Stack.Navigator>
            </NavigationContainer>
          );
    }
}

export default Navigator;