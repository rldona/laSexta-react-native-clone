import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from "./src/components/Header";
import Card from "./src/components/Card";

const Tab = createBottomTabNavigator();

// Screens
// 1. Videos
function VideosScreen() {
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
// 2. Alertas
function AlertasScreen() {
  return (
    <Text>Alertas</Text>
  );
}
// 3. Escucha laSexta
function EscuchaScreen() {
  return (
    <Text>Escucha laSexta</Text>
  );
}
// 4. Directo
function DirectoScreen() {
  return (
    <Text>Directo</Text>
  );
}

function MyTabs() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Videos"
            component={VideosScreen}
            options={{
              tabBarLabel: 'Videos',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="youtube-tv" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Alertas"
            component={AlertasScreen}
            options={{
              tabBarLabel: 'Alertas',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell-alert" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Escucha laSexta"
            component={EscuchaScreen}
            options={{
              tabBarLabel: 'Escucha laSexta',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="volume-high" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Directo"
            component={DirectoScreen}
            options={{
              tabBarLabel: 'Directo',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="arrow-right-bold-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <MyTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 92
  },
  cardList: {
    display: 'flex',
    alignItems: 'center'
  }
});
