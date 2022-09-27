import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import MyInput from './components/MyInput'
const App = () => {
  return (
    <View>
      <ImageBackground
        source={require('./imagens/fundo-vacina.png')}

      />
    </View >
  );
};

const styles = StyleSheet.create({
  container:{
    opacity: 0.6,
    
  }


})

export default App;