import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <View >
                <Text style={styles.text}>Nova Vacina</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#37BD6D',
        width: 100,
        height: 40,
        justifyContent: 'center'
    },
    text: {
        left: 10,
        alignItems: 'center',
        color: 'white'
    },
   

})