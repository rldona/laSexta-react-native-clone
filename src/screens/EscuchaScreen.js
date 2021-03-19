import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EscuchaScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/escucha-image.jpeg')} style={styles.cover}>
        <View style={styles.info}>
          <Text style={styles.h1}>Más Vale Tarde</Text>
          <Text style={styles.h2}>Programa diario dirigido y presentado por Mamen Mendizábal que vive pegado a la noticia, analiza...</Text>
          <Text style={styles.h3}>19 - 03 - 2021</Text>
        </View>
      </ImageBackground>
      <View style={styles.player}>
        <View style={styles.squareButton}>
          <MaterialCommunityIcons name="square" color={'#FFF'} size={23} style={{ 'paddingTop': 18 }}/>
        </View>
        <View style={styles.timer}>
          <Text style={{ color: '#00b023', fontWeight: '700', fontSize: 13 }}>17:15</Text>
          <Text style={{ color: '#00b023', fontWeight: '700', fontSize: 13 }}>20:00</Text>
        </View>
        <View style={{ position: 'relative', width: 350, height: 10, backgroundColor: '#ddd' }}>
          <View style={{ position: 'relative', width: '75%', height: 10, backgroundColor: '#00b023' }}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF'
  },
  cover: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  info: {
    position: 'absolute',
    bottom: 0,
    left: 25
  },
  h1: {
    fontSize: 35,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center'
  },
  h2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  h3: {
    fontSize: 12,
    color: '#222',
    textAlign: 'center'
  },
  squareButton: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30
  },
  timer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350
  },
  player: {
    display: 'flex',
    alignItems: 'center'
  }
});
