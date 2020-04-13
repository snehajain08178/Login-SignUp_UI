import React, { Component } from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

class TextInputClass extends Component{
    render(){
        return (
            <View>
                <TextInput style={styles.textInput} 
                           secureTextEntry={this.props.secureTextEntry}
                           placeholderTextColor='white'></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        height: 40,
        color: 'white',
    }
})

export default TextInputClass;