import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useLinkProps } from '@react-navigation/native'
import CheckBoxDose from '../components/CheckBoxDose';
import { SafeAreaView } from 'react-native-safe-area-context'
import { SimpleModal } from '../components/SimpleModal'
const NovaVacina = () => {

    const optionsCheck = [{ text: 'Masculino', id: 1 }];

    const [isModalVisible, setisModalVisible] = useState(false);
    const [chooseData, setischooseData] = useState();
    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (data) => {
        setischooseData(data);
    }
    return (
        <View style={styles.container}>
            <View style={[styles.viewDados,{right:50}]} >

                <Text style={styles.dados} >Data de Vacinação </Text>
                <TextInput style={[styles.input, { width: 150 }]} keyboardType='numeric' />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.dados} >Vacina </Text>
                <TextInput style={styles.input} />
            </View>
            <View>
                <CheckBoxDose options={optionsCheck} onChange={op => alert(op)} />
            </View>
            <Text style={styles.textCp}> Comprovante </Text>
            <TouchableOpacity style={styles.selImagem}>
                <Text style={styles.textSel}>Selecionar uma imagem...</Text>
            </TouchableOpacity>
            <Image style={{ width: 180, height: 60, right: 80 }} source={require('../imagens/card.png')} />
            <View style={styles.viewDados}>
                <Text style={styles.dados} >Próxima Vacina </Text>
                <TextInput style={styles.input} keyboardType='numeric' />
            </View>
            <TouchableOpacity style={styles.botao}  >
                <Text style={styles.textBot}>Cadastrar</Text>
            </TouchableOpacity>



        </View >



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
        right: 60,
        bottom: 20,
        top: 5,


    },
    viewDados: {
        flexDirection: 'row',

    },
    botao: {
        backgroundColor: '#37BD6D',
        width: 130,
        height: 40,
        justifyContent: 'center',
        right: 120,
        top: 50

    },
    textBot: {
        width: 165,
        height: 34,
        right: 20,
        fontFamily: 'Averia Libre',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 29,
        textAlign: 'center',
        color: '#FFFFFF'

    },
    textBotEx: {
        width: 165,
        height: 34,
        right: 35,
        fontFamily: 'Averia Libre',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 29,
        textAlign: 'center',
        color: '#FFFFFF',
        bottom: 5

    },
    dados: {
        color: 'white',
        right: 60,
        bottom: 10,
        top: 10,

    },
    botaoExcluir: {
        width: 90,
        height: 20,
        justifyContent: 'center',
        right: 140,
        top: 100,
        backgroundColor: '#FD7979'
    },
    iconInj: {
        width: 15,
        top: 5,
        height: 15,
        flexDirection: 'row',
        right: 30,
    },
    selImagem: {
        width: 180,
        height: 20,
        justifyContent: 'center',
        right: 90,
        bottom: 10,
        backgroundColor: '#419ED7'
    },
    textSel: {
        color: 'white',
        left: 10,
        flexDirection: 'row',

    },
    textCp: {
        color: 'white',
        right: 270,
        bottom: 10,
        top: 10,
        flexDirection: 'row',

    },
    iconCalen: {
        width: 15,
        top: 15,
        height: 15,
        flexDirection: 'row',
        left: 70,
    },
    contSafe: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FD7979',
        top: 100,
        right: 120,
        height: 30,
        width: 130,

    },
    touchableOpacity: {
        backgroudColor: 'orange',
        paddingHorizontal: 50
    },
    textSafe: {
        bottom: 10,
        fontSize: 9,
        fontWeight: 'bold'
    }
})
export default NovaVacina