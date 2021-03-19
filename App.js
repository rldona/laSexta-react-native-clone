import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import VideosScreen from "./src/screens/VideosScreen";
import AlertasScreen from "./src/screens/AlertasScreen";
import EscuchaScreen from "./src/screens/EscuchaScreen";
import DirectoScreen from "./src/screens/DirectoScreen";

import Header from "./src/components/Header";

const Tab = createBottomTabNavigator();

function LaSextaTabs() {
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
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <LaSextaTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 92
  }
});
