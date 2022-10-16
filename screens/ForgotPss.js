import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../config/firebase'

const ForgotPss = () => {
    const [email, setEmail] = useState()

    const recuperarSenha = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Email de redefinição enviado com sucesso!')
            })
            .catch(() => {
                console.log('Erro ao solicitar a redefinição de senha')
            })
    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>E-mail</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail}></TextInput>
            <View style={styles.rec}>
                <TouchableOpacity style={styles.botao} onPress={recuperarSenha}>
                    <Text style={styles.textRec}>Recuperar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0',
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'white',
        width: 250,
        height: 40,
        left: 50,
        top: 200

    },
    text: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        top: 210,
        left: 40,
        color: 'white'
    },
    rec: {
        flex: 1,
        justifyContent: 'flex-end',
        right: 150,
        alignItems: 'center',
        bottom: 20,
    },
    botao: {
        backgroundColor: '#37BD6D',
        width: 120,
        height: 30,
        alignItems: 'center'
    },
    textRec: {
        color: 'white',
        top: 5
    }
})
export default ForgotPss