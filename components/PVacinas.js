import React from "react"
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const PVacinas = (props) => {

    const { item } = props.item

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.vacina}</Text>
            <Text style={styles.proximaDose}>{item.proximaVacina}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: (Dimensions.get('window').width / 1) - 100,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    text: {
        fontFamily: 'Averia Libre',
        fontStyle: 'normal',
        fontSize: 25,
        lineHeight: 43,
        textAlign: 'center',
        color: '#3F92C5',
        right: 70,
    },
    dose: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#3F92C5',
        width: 100,
        alignItems: 'center',
        left: 50,
    },
    data: {
        flex: 1,
        color: 'black',
        textAlign: 'center',
    },
    proximaDose: {
        color: '#8B8B8B',
        textAlign: 'center',
        width: 180,

    }

})

export default PVacinas