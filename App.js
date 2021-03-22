import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <StoreProvider store={configureStore()}>
      <StackNavigator />
    </StoreProvider>
  );
}
