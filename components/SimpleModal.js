import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'


const HEIGHT_MODAL = 150;
const WIDTH = Dimensions.get('window').width;

const SimpleModal = (props) => {

    closeModal = (bool,data) =>{
       props.changeModalVisible(bool);
       props.setData(data);
    }
    return (
        <TouchableOpacity disabled={true} style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={[styles.text, { fontSize: 20 }]}>Tem certeza que deseja remover essa vacina?</Text>
                </View>
                <View style={styles.butttonsView}>
                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Text style={[styles.text, { color: 'white' }]} onPress={() => closeModal(false, 'Ok')}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableOpacity, { backgroundColor: '#3F92C5' }]} onPress={() => closeModal(false, 'Cancel')}>
                        <Text style={[styles.text, { color: 'white' }]}>CANCELAR</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 150,
        alignItems: 'center',
        justifyContent: 'center',
        left: 15
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 60,
        backgroundColor: 'white',
        borderRadius: 4,
        paddingTop: 15,
        borderWidth: 1

    },
    textView: {
        flex: 1,
        alignItems: 'center',

    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FD7979',


    },
    butttonsView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    touchableOpacity: {
        backgroundColor: '#FF8383',
        width: 120,
        height: 30,
        bottom: 10,
        alignItems: 'center'


    },
})
export { SimpleModal }