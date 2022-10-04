import React from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

//Especificação do componente
const MyInput = (props) => {

    

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View >
                <TextInput placeholder='Email' autoCorrect={false} onChangeText={() => { }}></TextInput>
                <TextInput placeholder='Senha' autoCorrect={false} onChangeText={() => { }}></TextInput>
            </View>
            <TouchableOpacity>
                <Text> Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Criar Conta</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#191919',
    }
})
export default MyInput;