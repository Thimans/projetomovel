import { View, FlatList, Text, StyleSheet, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import CardVacina from '../components/CardVacina'

const MinhasVacinas = (props) => {
    const listaVacinas = [
        {
            id: 0,
            vacina: 'BCG',
            data: '2022-09-21',
            dose: 'Dose Única',
            urlImage: 'http://',
            proximaVacina: 'Próxima dose em:2024-09-23'
        },
        {
            id: 1,
            vacina: 'Febre amarela',
            data: '2022-09-21',
            dose: '1a dose',
            urlImage: 'http://',
            proximaVacina: 'Próxima dose em:2024-09-23'
        },
        {
            id: 2,
            vacina: 'Sarampo',
            data: '2022-09-21',
            dose: '1a dose',
            urlImage: 'http://',
            proximaVacina: 'Próxima dose em:2024-09-23'
        },
        {
            id: 3,
            vacina: 'Poliomelite',
            data: '2022-09-21',
            dose: '1a dose',
            urlImage: 'http://',
            proximaVacina: 'Próxima dose em:2024-09-23'
        },
    ];

    if (props.route.params?.excluiVacina) {
        listaVacinas.forEach((vac) => {
            if (vac.id === props.route.params.vacina.id) {
                listaVacinas.splice(vac.id - 1, 1);
            }
        })
    }
    const goToNovaVacina = () => {
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

            <FlatList data={listaVacinas} renderItem={(item) => <CardVacina item={item} onPress={goToEditarCard} />} numColumns={2} />

            <TouchableOpacity style={styles.button} onPress={goToNovaVacina}>
                <Text style={styles.textVacina}>Nova Vacina</Text>
            </TouchableOpacity>
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
        top: 10
    },
    subDados: {

        color: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#37BD6D',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        bottom: 50


    },
    text: {
        color: 'white',
        right: 10
    },
    textVacina: {
        color: 'white'
    }
})
export default MinhasVacinas