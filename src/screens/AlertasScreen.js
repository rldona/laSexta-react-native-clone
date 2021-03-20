import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RadioButtonRN from 'radio-buttons-react-native';

export default function AlertasScreen() {
  const data = [
    {
      id: '0',
      label: 'No quiero perderme nada'
    },
    {
      id: '1',
      label: 'Noticias y reportajes más relevantes'
    },
    {
      id: '2',
      label: 'Desactivar alertas'
    }
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>¿Qué notificaciones quires recibir?</Text>
        <View style={styles.containerSelector}>
          <RadioButtonRN
            initial={1}
            data={data}
            box={false}
            circleSize={16}
            boxStyle={{ marginBottom: 25 }}
            duration={250}
            animationTypes={['zoomIn']}
            activeColor={ '#00b023' }
            boxDeactiveBgColor={ 'transparent' }
            boxActiveBgColor={ 'transparent' }
            selectedBtn={(e) => console.log(e)}
          />
        </View>
      </View>

      <View style={styles.dividier}></View>

      <View>
        <Text style={styles.title}>Alertas del 19/03/2021</Text>
        <View style={styles.alert}>
          <Text style={styles.alertH1}>Riesgo en MIYAGI</Text>
          <Text style={styles.alertText}>Japón sufre un terremoto de magnitud 7,2 y activa...</Text>
          <Text style={styles.alertTime}>13:26</Text>
        </View>
        <View style={styles.alert}>
        <Text style={styles.alertH1}>Riesgo en MIYAGI</Text>
          <Text style={styles.alertText}>Japón sufre un terremoto de magnitud 7,2 y activa...</Text>
          <Text style={styles.alertTime}>13:26</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  containerSelector: {
    marginBottom: 10,
    width: 380,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  divider: {
    height: 40
  },
  alert: {
    backgroundColor: '#00b023',
    width: 380,
    padding: 12,
    marginTop: 10,
  },
  alertH1: {
    color: '#FFF',
    fontWeight: '700',
    marginBottom: 5
  },
  alertText: {
    color: '#FFF',
    width: 380,
    overflow: 'hidden',
  },
  alertTime: {
    position: 'absolute',
    top: 8,
    right: 8,
    color: '#FFF',
    fontSize: 10
  }
});
