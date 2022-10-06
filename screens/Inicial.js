import React from 'react';
import { Text, TextInput, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState } from 'react';

const Inicial = (props) => {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const goToCriarConta = () => {
    props.navigation.navigate('CriarConta')
  }
  const goToHome = () => {
    props.navigation.navigate('Home')
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ImageBackground source={require('../imagens/fundo-vacina.jpg')} style={{ opacity: 0.8 }} >
        <View>
          <Image style={styles.imginj} source={require('../imagens/injeção.png')} />
          <Text style={styles.texto}>MyHealth</Text>
        </View>

        <View style={styles.subViewVacina}>
          <Text style={styles.subTexto}>Controle as suas  vacinas </Text>
          <Text style={styles.subTst}>e fique seguro</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.subDados} >
            <Text style={styles.subDados}>Email:</Text>
          </View>
          <TextInput style={styles.input} value={email} placeholder='Email' autoCorrect={false} onChangeText={() => { }} />
          <View style={styles.subDados} >
            <Text style={styles.subDados}>  Senha:</Text>
          </View>
          <TextInput style={styles.input} value={senha} placeholder='Senha' autoCorrect={false} onChangeText={() => { }} />

          <TouchableOpacity style={styles.botSubmit} onPress={goToHome}>
            <Text style={styles.subEntrar}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.criarEntrar} onPress={goToCriarConta}>
            <Text style={styles.subCriar}>Criar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPss}>
            <Text style={styles.subForgot} >Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'space-between',


  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    left: 30,
    backgroundColor: '#FFF',
    width: 250,
    marginBottom: 15,
    color: '#222',
    height: 35,
    padding: 10,
    top: 0,

  },
  botSubmit: {
    backgroundColor: '#37BD6D',
    color: '#FFFFFF',
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    elevation: 20,
    shadowColor: 'black',

  },
  subEntrar: {
    fontFamily: 'Averia Libre',
    fontStyle: 'normal',
    fontSize: 20,
    color: 'white',

  },
  criarEntrar: {
    top: 90,
    backgroundColor: '#419ED7',
    width: 150,
    height: 30,
    justifyContent: "center",
    alignItems: "center",

  },
  forgotPss: {
    top: 130,
    backgroundColor: '#B0CCDE',
    width: 170,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    width: 600,
    height: 70,
    left: 320,
    fontFamily: 'AveriaLibre',
    fontStyle: 'regular',
    fontSize: 35,
    lineHeight: 76,
    textDecorationLine: 'underline',
    color: '#419ED7',
  },
  imginj: {
    width: 30,
    height: 36,
    left: 290,
    top: 56,
  },
  subTexto: {
    display: 'flex',
    width: 800,
    height: 50,
    left: 270,
    top: 20,
    fontFamily: 'Averia Libre',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 30,
    color: '#419ED7',
    marginBottom: 0,
    paddingBottom: 0,
  },
  subCriar: {
    color: 'white',
  },
  subForgot: {
    color: 'white'
  },
  subViewVacina: {
    width: 800,
    height: 50,

  },
  subTst: {
    display: 'flex',
    width: 800,
    height: 50,
    left: 320,
    top: 20,
    fontFamily: 'Averia Libre',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 30,
    color: '#419ED7',
  },
  subDados: {
    right: 80,
    display: 'flex',
    color: 'white',
    justifyContent: "center",
    alignItems: "center",
    top: 12,
  }
})
export default Inicial;