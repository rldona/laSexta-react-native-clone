import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { setCurrentRoute } from '../redux/actions/optionsActions';

const Stack = createStackNavigator();

import TabNavigator from "./TabNavigator";
import DetailScreen from "../screens/DetailScreen";

export default function StackNavigator() {
  const dispatch = useDispatch();

  return (
    <NavigationContainer
      onStateChange={(nav) => {
        const index = nav.routes[0].state.index;
        const currentRoute = nav.routes[0].state.routeNames[index];
        dispatch(setCurrentRoute(currentRoute));
      }}
    >
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
