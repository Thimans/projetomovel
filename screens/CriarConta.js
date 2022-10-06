import React, { useState, useEffect } from 'react';
import { View, Text, Button, Header, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const CriarConta = () => {

    const [nome, setNome] = useState()
    const [data, setData] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [rep, setRep] = useState()


    useEffect(() => {
        console.log('Entrei no useEffect')
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hearder}>
                <Image source={require('../imagens/injeção.png')} style={styles.iconInj}></Image>
                <Text style={styles.text}>MyHealth</Text>
            </View>

            <View style={styles.tex}>
                <View style={styles.viewDados}>
                    <Text style={styles.dados} >Nome completo </Text>
                    <TextInput value={nome} onChangeText={setNome} style={styles.input} />
                </View>
                <View style={styles.viewDados}>
                    <Text style={styles.dados}>Data Nascimento</Text>
                    <TextInput value={nome} onChangeText={setData} style={styles.input} />
                </View>
                <View style={styles.viewDados}>
                    <Text style={styles.dados} >Email</Text>
                    <TextInput value={nome} onChangeText={setEmail} style={styles.input} />
                </View >
                <View style={styles.viewDados}>
                    <Text style={styles.dados} >Senha</Text>
                    <TextInput value={nome} onChangeText={setSenha} style={styles.input} />
                </View>
                <View style={styles.viewDados}>
                    <Text style={styles.dados} >Repetir senha</Text>
                    <TextInput value={nome} onChangeText={setRep} style={styles.input} />
                </View>
            </View>
            <View>
                <TouchableOpacity  >
                    <Text style={styles.textCad}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    )
}

const styles = StyleSheet.create({

    container: {

    },
    hearder: {
        backgroundColor: '#C1E7E3',
        height: 50,
        flexDirection: 'row',
    },
    text: {
        fontSize: 30,
        color: '#419Ed7',
    },
    iconInj: {
        width: 30,
        height: 30,
        top: 5,

    },
    textCad: {
        fontSize: 30,
        textAlign: 'center'
    },

    botao: {
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        padding: 10,
        width: 200,
        left: 100

    },
    tex: {
        justifyContent: "center",
        backgroundColor: '#ADD5D0',



    },
    input: {
        height: 35,
        width: 200,
        marginBottom: 10,
        backgroundColor: 'white',
        left: 20,
        justifyContent: 'center',
    },
    viewDados: {
        height: 80,
        flexDirection: 'row',
        top: 10,
        left: 20,
    },
    dados: {
        color: 'white',

    }
})
export default CriarConta