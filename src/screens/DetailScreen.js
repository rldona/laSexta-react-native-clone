import React from 'react';
import { StyleSheet, View, ImageBackground, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailScreen() {
  const navigation = useNavigation();

  const onPressButton = () => {
    console.log('pressed');
    navigation.goBack();
  }

  const onPressSocial = (social) => {
    console.log(social);
  }

  return (
    <View style={styles.cardList}>
      <View style={styles.goBackIcon}>
        <MaterialCommunityIcons name="chevron-left" color={'#FFF'} size={55} onPress={onPressButton} />
      </View>

      <ImageBackground source={require('../../assets/congreso.jpg')} style={styles.cover}></ImageBackground>

      <View style={styles.socialContainer}>
        <Pressable onPress={() => onPressSocial('share')} style={styles.socialButton}>
          <View style={styles.center}>
            <MaterialCommunityIcons name="share-variant" color={'#FFF'} size={30} />
          </View>
        </Pressable>
        <Pressable onPress={() => onPressSocial('whatsapp')} style={[styles.socialButton, styles.whatsapp]}>
          <View style={styles.center}>
            <MaterialCommunityIcons name="whatsapp" color={'#FFF'} size={30} />
          </View>
        </Pressable>
        <Pressable onPress={() => onPressSocial('facebook')} style={[styles.socialButton, styles.facebook]}>
          <View style={styles.center}>
            <MaterialCommunityIcons name="facebook" color={'#FFF'} size={30} />
          </View>
        </Pressable>
        <Pressable onPress={() => onPressSocial('twitter')} style={[styles.socialButton, styles.twitter]}>
          <View style={styles.center}>
            <MaterialCommunityIcons name="twitter" color={'#FFF'} size={30} />
          </View>
        </Pressable>
      </View>

      <ScrollView>
        <Text style={styles.h1}>España ya tiene ley de Eutanasia: ¿qué supone? ¿cuándo entre en vigor?, ¿quién podrá solicitarla?</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  cover: {
    width: '100%',
    height: 280,
    resizeMode: 'cover'
  },
  goBackIcon: {
    position: 'absolute',
    top: 40,
    left: 5,
    zIndex: 999
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButton: {
    width: '25%',
    height: 50,
    backgroundColor: '#000',
  },
  whatsapp: {
    backgroundColor: '#2abb00'
  },
  facebook: {
    backgroundColor: '#4b6fa8'
  },
  twitter: {
    backgroundColor: '#1db6e7'
  },
  center: {
    alignItems: 'center',
    marginTop: 10
  }
});
