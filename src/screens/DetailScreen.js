import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetailScreen() {
  const navigation = useNavigation();

  const onPressButton = () => {
    console.log('pressed');
    navigation.goBack();
  }

  return (
    <View style={styles.cardList}>
      <Text>DetailScreen</Text>
      <Button title="Volver" onPress={onPressButton} />
      <Button title="Volver" onPress={onPressButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    backgroundColor: '#FFF'
  },
});
