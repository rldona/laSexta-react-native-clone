import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default function Card() {
  return (
    <View style={styles.containerImage}>
      <ImageBackground source={require('../../assets/congreso.jpg')} style={styles.cover}></ImageBackground>
      <View style={styles.containerText}>
        <Text style={styles.h1}>España ya tiene ley de Eutanasia: ¿qué supone? ¿cuándo entre en vigor?, ¿quién podrá solicitarla?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: 380,
    shadowColor: '#000',
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 5,
  },
  cover: {
    width: 380,
    height: 200,
    resizeMode: 'cover'
  },
  containerText: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  h1: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700'
  }
});
