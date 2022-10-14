import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import PVacinas from '../components/PVacinas'
const listaVacinas = [
    {
        vacina: 'BCG',
        data: '2022-09-21',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },
    {
        vacina: 'Febra amarela',
        data: '2022-09-21',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },
    {
        vacina: 'Sarampo',
        data: '2022-09-21',
        proximaVacina: 'Próxima dose em:2024-09-23'
    },
]


const ProximasVacinas = () => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList data={listaVacinas} renderItem={(item) => <PVacinas item={item} />} numColumns={1} />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0'
    },
})

export default ProximasVacinas