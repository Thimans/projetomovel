import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Inicial';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Inicial' component={Inicial} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App