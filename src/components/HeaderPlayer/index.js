import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HeaderPlayer() {
  return (
    <View style={styles.container}>
      <View style={styles.headerPlayerWidget}>
        <View>
          <Text style={styles.headerPlayerText}>laSexta Noticias 14:00</Text>
          <Text style={styles.headerPlayerText}>de 14:00 a 15:00</Text>
        </View>
        <MaterialCommunityIcons name="close" color={'#555'} size={26} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    padding: 15,
    borderTopWidth: 4,
    borderColor: '#00b023'
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
  },
  headerPlayerText: {
    fontSize: 14,
    color: '#FFF'
  },
  headerPlayerWidget: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
