import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import VideosScreen from "../screens/VideosScreen";
import AlertasScreen from "../screens/AlertasScreen";
import EscuchaScreen from "../screens/EscuchaScreen";
import DirectoScreen from "../screens/DirectoScreen";

import Header from "../components/Header";
import HeaderPlayer from "../components/HeaderPlayer";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <HeaderPlayer></HeaderPlayer>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#00b023',
            labelStyle: {
              fontSize: 10
            }
          }}
        >
          <Tab.Screen
            name="Videos"
            component={VideosScreen}
            options={{
              tabBarLabel: 'Videos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="youtube-tv" color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Alertas"
            component={AlertasScreen}
            options={{
              tabBarLabel: 'Alertas',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell-alert" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Escucha laSexta"
            component={EscuchaScreen}
            options={{
              tabBarLabel: 'Escucha laSexta',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="volume-high" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Directo"
            component={DirectoScreen}
            options={{
              tabBarLabel: 'Directo',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="arrow-right-bold-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 90
  }
});
