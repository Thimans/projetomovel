import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';

const MyInput = (props) => {
    const { placeholder, label } = props;
    return (
        <ScrollView>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginLeft: 10
    },

    input: {
        fontSize: 15,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    }
})
export default MyInput