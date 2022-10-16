import { View, FlatList, Text, StyleSheet, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import CardVacina from '../components/CardVacina'

const listaVacinas = [
    {
        vacina: 'BCG',
        data: '2022-09-21',
        dose: 'Dose Única',
        urlImage: 'http://',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },
    {
        vacina: 'Febre amarela',
        data: '2022-09-21',
        dose: '1a dose',
        urlImage: 'http://',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },
    {
        vacina: 'Sarampo',
        data: '2022-09-21',
        dose: '1a dose',
        urlImage: 'http://',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },
    {
        vacina: 'Poliomelite',
        data: '2022-09-21',
        dose: '1a dose',
        urlImage: 'http://',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },


]
const MinhasVacinas = (props) => {
    const goToNovaVacina = () => {
        console.log("FUCK")
        props.navigation.navigate('NovaVacina')

    }
    const goToEditarCard = () => {
        props.navigation.navigate('EditarCard')

    }
    return (
        <View style={styles.container}>

            <View style={styles.subDados}>
                <TextInput style={styles.input} placeholder='Pesquisar Vacina' autoCorrect={false} onChangeText={() => { }} />

            </View>
            <TouchableOpacity label='Nova Vacina' style={styles.button} onPress={goToNovaVacina} />

            <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item} onPress={goToEditarCard} />} numColumns={2} />



        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ADD4D0',

    },
    input: {
        backgroundColor: '#FFF',
        width: 290,
        marginBottom: 15,
        color: '#222',
        height: 35,
    },
    subDados: {

        color: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#37BD6D',
        alignItems: 'flex-end',
        justifyContent: 'center',


    },
    text: {
        color: 'white',
        right: 10
    }
})
export default MinhasVacinas