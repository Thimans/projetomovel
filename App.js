import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './screens/Inicial';
import CriarConta from './screens/CriarConta';
import Home from './screens/Home';
import ForgotPss from './screens/ForgotPss';
import NovaVacina from './screens/NovaVacina';
import { View, Image, StyleSheet } from 'react-native';
import EditarCard from './screens/EditarCard';
import CardVacina from './components/CardVacina';



const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Inicial' component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPss' component={ForgotPss} options={{ headerTitleStyle: styles.titleColor, headerTitle: 'MyHealth', headerStyle: { backgroundColor: '#C1E7E3' }, headerLeft: () => <View><Image style={styles.iconInj} source={require('./imagens/injeção.png')} /></View> }} />
        <Stack.Screen name='CriarConta' component={CriarConta} options={{ headerTitleStyle: styles.titleColor, headerTitle: 'MyHealth', headerStyle: { backgroundColor: '#C1E7E3' }, headerLeft: () => <View><Image style={styles.iconInj} source={require('./imagens/injeção.png')} /></View> }} />
        <Stack.Screen name='EditarCard' component={EditarCard} options={{ headerTitleStyle: styles.titleColor, headerTitle: 'MyHealth', headerStyle: { backgroundColor: '#C1E7E3' }, headerLeft: () => <View><Image style={styles.iconInj} source={require('./imagens/injeção.png')} /></View> }} />
        <Stack.Screen name='NovaVacina' component={NovaVacina} options={{ headerTitleStyle: styles.titleColor, headerTitle: 'MyHealth', headerStyle: { backgroundColor: '#C1E7E3' }, headerLeft: () => <View><Image style={styles.iconInj} source={require('./imagens/injeção.png')} /></View> }} />
        <Stack.Screen name='CardVacina' component={CardVacina} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  iconInj: {
    width: 30,
    height: 30
  },
  titleColor: {
    color: '#419ED7'
  }
})
export default App