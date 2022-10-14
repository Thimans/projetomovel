import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';


const CheckBox = ({ options = [], onChange }) => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View>

            <View style={styles.check}>
                <Text style={styles.text}> Sexo </Text>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={styles.txtM}>Masculino</Text>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Text style={styles.txtM}>Feminino</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    check: {
        flexDirection: 'row',
        alignContent: 'center',
        right: 90,
        bottom:20,
        top:5
    },
    text: {
        color: 'white',
        right: 15,
        top:10
    },
    txtM: {
        top:10,
        color:'white'
    }
})

export default CheckBox