import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { setPlayerVisible, setPlaying } from '../redux/actions/optionsActions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HeaderPlayer() {
  const dispatch = useDispatch();

  const { options } = useSelector(state => state);

  const togglePlayPlayer = () => {
    dispatch(setPlaying(!options.isPlaying));
  }

  const stopAndClosePlayer = () => {
    dispatch(setPlaying(false));
    dispatch(setPlayerVisible(false));
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerPlayerWidget}>
        <View style={styles.infoButton}>
          <Pressable onPress={togglePlayPlayer} style={styles.button}>
            <View style={styles.squareButton}>
              {
                options.isPlaying ?
                  <MaterialCommunityIcons name="square" color={'#000'} size={14} style={{ 'paddingTop': 8 }}/> :
                  <MaterialCommunityIcons name="play" color={'#000'} size={20} style={{ 'paddingTop': 4 }}/>
              }
            </View>
          </Pressable>
          <View style={{ 'marginLeft': 20 }}>
            <Text style={styles.headerPlayerText}>laSexta Noticias 14:00</Text>
            <Text style={styles.headerPlayerText}>de 14:00 a 15:00</Text>
          </View>
        </View>
        <Pressable onPress={stopAndClosePlayer} style={styles.button}>
          <MaterialCommunityIcons name="close" color={'#555'} size={26} />
        </Pressable>
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
    borderColor: '#00b023',
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
    alignItems: 'center',
  },
  squareButton: {
    width: 30,
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 50,
    alignItems: 'center',
  },
  infoButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  }
});
