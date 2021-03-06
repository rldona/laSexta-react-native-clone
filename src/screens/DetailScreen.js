import React from 'react';
import { Share, StyleSheet, View, ImageBackground, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailScreen() {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.goBack();
  }

  const onPressSocial = (social) => {
    console.log(social);
  }

  const onShare = async() => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={styles.cardList}>
      <View style={styles.goBackIcon}>
        <MaterialCommunityIcons name="chevron-left" color={'#FFF'} size={50} onPress={onPressButton} />
      </View>

      <ImageBackground source={require('../../assets/news-cover.jpg')} style={styles.cover}></ImageBackground>

      <View style={styles.socialContainer}>
        <Pressable onPress={() => onShare()} style={styles.socialButton}>
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 50,
        }}
      >
        <Text style={[styles.text, styles.light, styles.h3, styles.uppecarse]}>Interrumpida esta semana</Text>
        <Text style={[styles.text, styles.h1, styles.bold]}>La Comisi??n de Salud P??blica valora a qu?? grupos administrar AstraZeneca ante la reanudaci??n de la vacunaci??n</Text>
        <Text style={[styles.text, styles.h2, styles.light]}>Ante la reanudaci??n de la vacunaci??n con AstraZeneca el pr??ximo mi??rcoles, los expertos se re??nen para determinar si esta no debe administrarse a ciertos grupos, como las mujeres j??venes.</Text>
        <Text style={[styles.text, styles.h3]}>laSexta.com Madrid | S??bado, 20 marzo, 2021 09:00</Text>
        <Text style={[styles.text]}>Espa??a prev?? reanudar el pr??ximo mi??rcoles la administraci??n de la vacuna de Oxford y AstraZeneca, a expensas de que la Comisi??n de Salud P??blica determine este fin de semana a qu?? grupos de la poblaci??n. Seg??n ha podido saber laSexta, los expertos podr??an recomendar que esta vacuna contra el coronavirus no se administre a ciertos colectivos, como las mujeres j??venes. No obstante, todav??a no hay decidida una edad concreta en la que establecer ese posible umbral etario. La Comisi??n, en la que se encuentran representadas tanto las autonom??as como el Ministerio de Sanidad, podr??a recomendar su uso para mayores de 55 a??os, ya que hasta ahora ven??a administr??ndose solo en personas m??s j??venes.</Text>
        <Text style={[styles.text]}>Los expertos abordar??n estas cuestiones despu??s de que el Consejo Interterritorial acordara el jueves reanudar la vacunaci??n con AstraZeneca la pr??xima semana, ante la conclusi??n de la Agencia Europea del Medicamento (EMA) de que sus beneficios son superiores a sus riesgos y de que la vacuna es "eficaz y segura". Una decisi??n del organismo regulador europeo que llegaba despu??s de que el lunes Sanidad decidiera paralizar la vacunaci??n con AstraZeneca durante 15 d??as, de forma preventiva, tras detectar eventos tromb??ticos tras su administraci??n.</Text>
        <Text style={[styles.text]}>Ahora, la Ponencia de Vacunas y la Comisi??n de Salud P??blica se reunir??n para examinar la nueva ficha t??cnica de la EMA y valorar si la vacuna no debe administrarse en alg??n colectivo por esos trombos. En este sentido, la directora de la Agencia Espa??ola de Medicamentos y Productos Sanitarios (AEMPS), Mar??a Jes??s Lamas, ya avanz?? esta semana que ahora la ficha t??cnica de la vacuna contempla indicaciones sobre posibles trombosis, principalmente en menores de 55 a??os y mujeres.</Text>
        <Text style={[styles.text]}>[Siguiente Noticia]</Text>
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
    left: 0,
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
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  uppecarse: {
    textTransform: 'uppercase'
  },
  bold: {
    fontWeight: '700'
  },
  light: {
    fontWeight: '300'
  },
  h1: {
    fontSize: 20
  },
  h2: {
    fontSize: 18
  },
  h3: {
    fontSize: 12
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
