import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Navigator from './src/navigation/navigation';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

export default class App extends Component {

  facebook = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {
    return (
      <Navigator />
      // <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      //     <Button title='login' onPress={() => this.facebook()}></Button>
      // </View>
    );
  }
};