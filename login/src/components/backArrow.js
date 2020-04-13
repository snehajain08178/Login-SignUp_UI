import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

class BackArrow extends Component {
    render(){
        return (
            <View style={styles.arrowCircle}>
                <IconAnt name='arrowleft' size={25} style={styles.arrow} color='white'/>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    arrowCircle:{
        backgroundColor: '#1565c0',
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center'
    },
    arrow: {
        alignSelf:'center',
    }
})

export default BackArrow;