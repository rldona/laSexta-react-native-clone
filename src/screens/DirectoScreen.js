import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

export default function DirectoScreen() {
  const onPressFunction = async() => {
    let result = await WebBrowser.openBrowserAsync('https://www.atresplayer.com');
    console.log(result);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/logo-directo.jpg')} style={styles.logo}></ImageBackground>
      <Text style={styles.text}>¿Quieres ver laSexta en directo?</Text>
      <Pressable onPress={onPressFunction} style={styles.button}>
        <Text style={styles.buttonText}>Ver en Atresplayer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF',
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: 50,
    marginBottom: 30,
    width: 280,
    height: 280,
    resizeMode: 'cover'
  },
  text: {
    color: '#222',
    fontSize: 17,
    fontWeight: '600'
  },
  button: {
    backgroundColor: '#00b023', // '#00872c', '#00d801'
    padding: 18,
    width: 330,
    marginTop: 40,
    display: 'flex',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    textTransform: 'uppercase'
  }
});