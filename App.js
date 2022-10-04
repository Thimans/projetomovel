import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Inicial';
import CriarConta from './screens/CriarConta';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Inicial' component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name='CriarConta' component={CriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App