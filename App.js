import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AppNavigator from "./src/navigation/AppNavigator";
import DetailScreen from "./src/screens/DetailScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ AppNavigator }
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Detail"
          component={ DetailScreen }
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
