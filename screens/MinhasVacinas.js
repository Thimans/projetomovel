import { View, Text, StyleSheet, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
const MinhasVacinas = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subDados}>
                < TextInput style={styles.input} placeholder='Pesquisar Vacina' autoCorrect={false} onChangeText={() => { }} />
            </View>
            <Button />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ADD4D0'
    },
    input: {
        display: 'flex',
        backgroundColor: '#FFF',
        width: 290,
        marginBottom: 15,
        color: '#222',
        height: 35,
        padding: 10,
    },
    subDados: {
        marginTop: 15,
        display: 'flex',
        color: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    //botSubmit: {
    //  backgroundColor: '#37BD6D'
    //}
})
export default MinhasVacinas