import React, { Component } from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import {
    View,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';

class Facebook_Google extends Component {
    render(){
        return (
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.googleTouch}>
          <View style={styles.googleCircle}>
            <IconAnt name='googleplus' size={25} style={styles.googlePlus} color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookTouch}>
          <View>
            <IconEnt name='facebook-with-circle' size={46} color='blue'/>
          </View>
        </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
      },
    googleTouch: {
      paddingRight: 5
    },
    googleCircle: {
      borderRadius: 26,
      backgroundColor: 'red',
    },
    googlePlus: {
      padding: 10
    },
    facebookTouch: {
      paddingLeft: 5
    }
  });

export default Facebook_Google;