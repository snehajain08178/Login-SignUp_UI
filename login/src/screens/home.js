import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Facebook_Google from '../components/facebook_google';


class Home extends Component {
  render(){
  return (
    <View style={styles.mainContainer}>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Hello!</Text>
        </View>
      <View style={styles.mainSignUpSignIn}>
        <View style={styles.signUpsignIn}>
          <View style={styles.signUp}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>Sign Up</Text>
              <Text style={styles.newHere}>New here ?</Text>
              <Text style={styles.signUpInner}>Dont worry just sign up to gain access to this amazing app</Text>
            </TouchableOpacity>          
          </View>
          <View style={styles.whiteView}>
          </View>
          <View style={styles.signIn}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={styles.signUpText}>Sign In</Text>
            <Text style={styles.newHere}>Returning ?</Text>
            <Text style={styles.signUpInner}>Just Sign in to resume what you were doing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signUpsignIn}>
          <View style={styles.signUpExtra}>
          </View>
          <View style={styles.whiteView}>
          </View>
          <View style={styles.extraSpace}>
          </View>
        </View>
      </View>
      <View >
        <Facebook_Google />
      </View>
    </View>
  );}
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'space-between',
    backgroundColor: 'white'
  },
  helloContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloText: {
    fontSize: 35,
    marginTop: 40
  },
  mainSignUpSignIn: {
    marginBottom: 20
  },
  signUpsignIn:{
    flexDirection: 'row',
  },
  signUp: {
    backgroundColor: '#1565c0',
    flex: 1.5,
    alignItems: 'center',
    borderTopRightRadius: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  signUpText: {
    fontSize: 27,
    color: 'white',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center'
  },
  newHere: {
    fontSize: 18,
    color: 'white',
    marginTop: 5,
    marginBottom: 30,
    alignSelf: 'center'
  },
  signUpInner: {
    fontSize: 18,
    color: 'white',
    textAlign:'center',
    paddingLeft: 3,
    paddingRight: 3,
    marginBottom: 32
  },
  whiteView:{
    flex:0.2,
  },
  signIn: {
    backgroundColor: '#1976d2',
    flex: 1.5,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30
  },
  extraSpace: {
    backgroundColor: 'white',
    flex: 1.5,
    height: 150
  },
  signUpExtra: {
    backgroundColor: '#1565c0',
    flex: 1.5,
    borderBottomRightRadius: 30,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Home;
