import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';


const CheckBox = ({ options = [], onChange }) => {
    const [checked, setChecked] = React.useState('um');
    return (
        <View>

            <View style={styles.check}>
                <Text style={styles.text}> Dose </Text>
                <RadioButton
                    value="um"
                    status={checked === 'um' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('um')}
                />
                <Text style={styles.txtM}>1a. dose</Text>
                <RadioButton
                    value="dois"
                    status={checked === 'dois' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('dois')}
                />
                <Text style={styles.txtM}>2a. dose</Text>
                <RadioButton
                    value="tres"
                    status={checked === 'tres' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('tres')}
                />
                <Text style={styles.txtM}>3a. dose</Text>
                <RadioButton
                    value="quatro"
                    status={checked === 'quatro' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('quatro')}
                />
                <Text style={styles.txtM}>Dose Única</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    check: {
        flexDirection: 'row',
        alignContent: 'center',
        bottom: 20,
        top: 5
    },
    text: {
        color: 'white',
        left: 5,
        top: 10
    },
    txtM: {
        top: 10,
        color: 'white'
    }
})

export default CheckBox