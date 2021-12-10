import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bottom from './Navigations/Bottom';
import FProvider from './Navigations/Context/Context';

export default function App() {
  return (
    <FProvider>
      <NavigationContainer>
        <Bottom />
      </NavigationContainer>
    </FProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
