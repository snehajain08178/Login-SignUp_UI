import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Component } from 'react';
import Facebook_Google from '../components/facebook_google';
import BackArrow from '../components/backArrow';
import TextInputClass from '../components/textInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends Component {

    state={
        name: '',
        email: ''
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <BackArrow />
                        </TouchableOpacity>
                    <View>
                        <Text style={styles.welcomeText}>Welcome!</Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <TouchableOpacity>
                        <Text style={styles.SignUpText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TextInputClass />
                    <Text style={{position:'relative',bottom: 56,left: 20,color:'white',fontSize: 20,backgroundColor:'#1565c0',width: 61}}> Name</Text>
                    <TextInputClass />
                    <Text style={{position:'relative',bottom: 56,left: 20,color:'white',fontSize: 20,backgroundColor:'#1565c0',width: 62}}> E-Mail</Text>
                    <TextInputClass secureTextEntry={true}/>
                    <Text style={{position:'relative',bottom: 56,left: 20,color:'white',fontSize: 20,backgroundColor:'#1565c0',width: 98}}> Password</Text>
                </View>
                <View>
                    <Facebook_Google />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent:'space-between',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    topContainer:{
        alignItems: 'center',
        paddingTop: 25
    },
    welcomeText: {
        marginTop: 20,
        fontSize: 40
    },
    form: {
        backgroundColor: '#1565c0',
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,
        paddingBottom: 20,
        marginBottom: 10
    },
    SignUpText: {
        fontSize: 30,
        color: 'white',
        marginBottom: 30,
        alignSelf: 'center',
        marginTop: 30
    }
})

export default SignUp;