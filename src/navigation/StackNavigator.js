import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TabNavigator from "./TabNavigator";
import DetailScreen from "../screens/DetailScreen";

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ TabNavigator }
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
