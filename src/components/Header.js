import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

export default function Header() {
  const onPressFunction = async() => {
    let result = await WebBrowser.openBrowserAsync('https://www.lasexta.com/constantes-vitales/causas/objetivo-ciencia/firma-elevar-pib-espanol-inversion-ciencia_202010165f89665bdf72120001c2ad3a.html');
    console.log(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../../assets/icon-la-sexta.png')} style={styles.logo}></Image>
        <View style={styles.firma}>
          <Pressable onPress={onPressFunction} style={styles.button}>
            <Text style={styles.firmaTitle}>FIRMA OBJETIVO 2%</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#181818',
    width: '100%',
    height: 90,
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 9999
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 8
  },
  firma: {
    borderWidth: 1,
    borderColor: '#FFF',
    paddingTop: 5,
    paddingBottom: 5
  },
  firmaTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  logo: {
    width: 120,
    height: 35,
    resizeMode: 'cover'
  }
});
