import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useLinkProps } from '@react-navigation/native'
import CheckBox from '../components/CheckBox';

const CriarConta = (props) => {
    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [data, setData] = useState()
    const [senha, setSenha] = useState()
    const [rep, setRep] = useState()

    const optionsCheck = [{ text: 'Masculino', id: 1 }];

    const criarUsuario = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log("Usuário adicionado com sucesso!")
                props.navigation.pop()
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao cadastrar usuário")
                console.log("Erro: " + error.message)
            })
    }
    return (
        <View style={styles.container}>
            <View style={styles.viewDados}>
                <Text style={styles.dados} >Nome completo </Text>
                <TextInput value={nome} onChangeText={setNome} style={styles.input} />
            </View>
            <View>
                <CheckBox options={optionsCheck} onChange={op => alert(op)} />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.dados} >Data nascimento </Text>
                <TextInput value={data} onChangeText={setData} style={styles.input} keyboardType="data" />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.dados}>E-mail </Text>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.dados} >Senha </Text>
                <TextInput value={senha} secureTextEntry={true} onChangeText={setSenha} style={styles.input} />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.dados}  >Repetir senha</Text>
                <TextInput value={rep} secureTextEntry={true} onChangeText={setRep} style={styles.input} />
            </View>

            <TouchableOpacity style={styles.botao} onPress={criarUsuario} >
                <Text style={styles.textBot}>Cadastrar</Text>
            </TouchableOpacity>

        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0',
        alignItems: 'flex-end',
        justifyContent: 'center',


    },
    input: {
        height: 35,
        width: 200,
        marginBottom: 10,
        backgroundColor: 'white',
        right: 100,
        bottom: 20,
        top: 10,

    },
    viewDados: {
        flexDirection: 'row',

    },
    botao: {
        backgroundColor: '#37BD6D',
        width: 100,
        height: 40,
        justifyContent: 'center',
        right: 150,
        top: 50

    },
    textBot: {
        width: 165,
        height: 34,
        right: 30,
        fontFamily: 'Averia Libre',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 29,
        textAlign: 'center',
        color: '#FFFFFF'

    },
    dados: {
        color: 'white',
        right: 100,
        bottom: 10,
        top: 10,
    }
})
export default CriarConta