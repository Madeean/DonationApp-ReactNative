/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from "react";
import {AppState} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { Provider, useSelector } from "react-redux";
import store, {persistor} from './redux/Store.ts';
import {PersistGate} from 'redux-persist/integration/react';
import NonAuthenticated from "./navigation/NonAuthenticated.tsx";
import { checkToken } from "./api/User.ts";

function App(): React.JSX.Element {
  const appState = useRef(AppState.currentState)
  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if(appState.current.match(/inactive|background/) && nextAppState === 'active'){
        console.log('you have come back into the app')
        await checkToken()
      }
      appState.current = nextAppState;
    })
    checkToken()
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <NonAuthenticated />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
