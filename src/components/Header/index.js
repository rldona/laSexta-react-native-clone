import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={require('../../../assets/icon-la-sexta.png')} style={styles.logo}></Image>
        <View style={styles.firma}>
          <Text style={styles.firmaTitle}>FIRMA OBJETIVO 2%</Text>
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
