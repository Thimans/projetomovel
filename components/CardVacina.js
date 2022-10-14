import React from "react"
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const CardVacina = (props) => {

    const { item } = props.item

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.vacina}</Text>
            <Text style={styles.dose}>{item.dose}</Text>
            <Text style={styles.data}>{item.data}</Text>
            <Image style={{ width: 180, height:60}} source={require('../imagens/card.png')} />
            <Text style={styles.proximaDose}>{item.proximaVacina}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: (Dimensions.get('window').width / 2) - 20,
        marginVertical: 2,
        marginHorizontal: 2,
        borderRadius: 10,


    },
    text: {
        fontFamily: 'Averia Libre',
        fontStyle: 'normal',
        fontSize: 26,
        textAlign: 'center',
        color: '#3F92C5',

    },
    dose: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#3F92C5',
        width: 80,
        alignItems: 'center',
        left: 50,
    },
    data: {
        flex: 1,
        color: '#8B8B8B',
        textAlign: 'center'
    },
    proximaDose: {
        color: '#FD7979',
        textAlign: 'center',
        width: 180,
        left: 30


    }

})

export default CardVacina