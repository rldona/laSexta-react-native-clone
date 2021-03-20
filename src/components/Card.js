import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card() {
  const navigation = useNavigation();

  const onPressFunction = async() => {
    console.log('card pressed');
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.containerImage}>
      <Pressable onPress={onPressFunction} style={styles.button}>
        <ImageBackground source={require('../../assets/news-cover.jpg')} style={styles.cover}></ImageBackground>
        <View style={styles.containerText}>
          <Text style={styles.h1}>La Comisión de Salud Pública valora a qué grupos administrar AstraZeneca ante la reanudación de la vacunación</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    shadowColor: '#000',
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingLeft: 10,
    paddingRight: 10,
    shadowOpacity: 0.22,
    shadowRadius: 4.22,
    elevation: 10,
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
