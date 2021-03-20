import React from 'react';
import { Share, StyleSheet, View, ImageBackground, Pressable, Text } from 'react-native';
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

      <ScrollView>
        <Text style={[styles.text, styles.light, styles.h3, styles.uppecarse]}>Interrumpida esta semana</Text>
        <Text style={[styles.text, styles.h1, styles.bold]}>La Comisión de Salud Pública valora a qué grupos administrar AstraZeneca ante la reanudación de la vacunación</Text>
        <Text style={[styles.text, styles.h2, styles.light]}>Ante la reanudación de la vacunación con AstraZeneca el próximo miércoles, los expertos se reúnen para determinar si esta no debe administrarse a ciertos grupos, como las mujeres jóvenes.</Text>
        <Text style={[styles.text, styles.h3]}>laSexta.com Madrid | Sábado, 20 marzo, 2021 09:00</Text>
        <Text style={[styles.text]}>España prevé reanudar el próximo miércoles la administración de la vacuna de Oxford y AstraZeneca, a expensas de que la Comisión de Salud Pública determine este fin de semana a qué grupos de la población. Según ha podido saber laSexta, los expertos podrían recomendar que esta vacuna contra el coronavirus no se administre a ciertos colectivos, como las mujeres jóvenes. No obstante, todavía no hay decidida una edad concreta en la que establecer ese posible umbral etario. La Comisión, en la que se encuentran representadas tanto las autonomías como el Ministerio de Sanidad, podría recomendar su uso para mayores de 55 años, ya que hasta ahora venía administrándose solo en personas más jóvenes.</Text>
        <Text style={[styles.text]}>Los expertos abordarán estas cuestiones después de que el Consejo Interterritorial acordara el jueves reanudar la vacunación con AstraZeneca la próxima semana, ante la conclusión de la Agencia Europea del Medicamento (EMA) de que sus beneficios son superiores a sus riesgos y de que la vacuna es "eficaz y segura". Una decisión del organismo regulador europeo que llegaba después de que el lunes Sanidad decidiera paralizar la vacunación con AstraZeneca durante 15 días, de forma preventiva, tras detectar eventos trombóticos tras su administración.</Text>
        <Text style={[styles.text]}>Ahora, la Ponencia de Vacunas y la Comisión de Salud Pública se reunirán para examinar la nueva ficha técnica de la EMA y valorar si la vacuna no debe administrarse en algún colectivo por esos trombos. En este sentido, la directora de la Agencia Española de Medicamentos y Productos Sanitarios (AEMPS), María Jesús Lamas, ya avanzó esta semana que ahora la ficha técnica de la vacuna contempla indicaciones sobre posibles trombosis, principalmente en menores de 55 años y mujeres.</Text>
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
    marginBottom: 25
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
  }
});
