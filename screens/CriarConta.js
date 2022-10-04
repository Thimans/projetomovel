import React from 'react';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator()

const CriarConta = () => {
    return (
        <View>
            <Text>
                CriarConta
            </Text>
            <Button title="Voltar" />
        </View>
    )
}
export default CriarConta