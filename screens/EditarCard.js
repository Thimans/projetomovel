import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'
import CheckBoxDose from '../components/CheckBoxDose';
import { listaVacinas } from './MinhasVacinas';

const EditarCard = (props) => {

    const optionsCheck = [{ text: 'Masculino', id: 1 }];
    const [excluir, setExcluir] = useState(true);
    const openExcluir = () => {
        setExcluir(true);
    }
    const closeExcluir = () => {
        setExcluir(false);
    }

    const excluiVacina = () => {
        listaVacinas.splice(props.route.params?.data.id, 1,)
        props.navigation.pop()
    }
    return (
        <View style={styles.cont}>
            <View style={[styles.viewDados, { right: 50 }]} >

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
                <Text style={styles.textBot}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoExcluir} onPress={openExcluir}>
                <Image style={[styles.iconInj, { top: 10 }]} source={require('../imagens/lixeira.png')} />
                <Text style={styles.textBotEx}>Excluir</Text>
            </TouchableOpacity>

            {excluir === true &&
                <View style={styles.Modal}>
                    <View style={styles.bordaModal}>
                        <Text style={styles.textExcluir}>Tem certeza que deseja remover essa vacina?</Text>
                        <View style={styles.cpExcluir}>
                            <TouchableOpacity style={styles.botaoSim} onPress={excluiVacina}>
                                <Text style={styles.txtExcluir}>SIM</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botaoNao} onPress={closeExcluir}>
                                <Text style={styles.txtExcluir}>CANCELAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }

        </View>



    )
}

const styles = StyleSheet.create({
    cont: {
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

        fontFamily: 'Averia Libre',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 29,
        textAlign: 'center',
        color: '#FFFFFF',
        bottom: 10

    },
    dados: {
        color: 'white',
        right: 60,
        bottom: 10,
        top: 10,

    },
    botaoExcluir: {
        width: 100,
        height: 20,
        justifyContent: 'center',
        right: 130,
        backgroundColor: '#FD7979',
        alignItems: 'center',
        top: 100
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


    },
    touchableOpacity: {
        backgroudColor: 'orange',
        paddingHorizontal: 50
    },

    Modal: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bordaModal: {
        borderWidth: 2,
        borderColor: '#B9DFDB',
        margin: 20,
        alignItems: 'center'
    },
    textExcluir: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FD7979'
    },
    cpExcluir: {
        flexDirection: 'row',
        marginVertical: 20
    },
    botaoSim: {
        width: 120,
        height: 60,

        backgroundColor: '#FF8383',
        marginHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoNao: {
        width: 160,
        height: 60,

        backgroundColor: '#3F92C5',
        marginHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtExcluir: {
        color: '#FFFFFF',
        fontSize: 20
    }
})
export default EditarCard