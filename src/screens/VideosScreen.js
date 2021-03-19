import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Card from "../components/Card";

export default function VideosScreen() {
  return (
    <View style={styles.cardList}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    display: 'flex',
    alignItems: 'center'
  }
});
