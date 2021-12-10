import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Header } from 'react-native-elements';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'SmartLab', style: { color: '#fff', fontSize: 30 } }}
        backgroundColor="#6f737a"
      />
      <View style={styles.con}>
        <View>
          <Text h1>Panel de administracion</Text>
          <Text h4>Hola administrador, aqui podras controlar el acceso a todos los recursos.</Text>
        </View>
        <View>
          <Image
            style={{
              resizeMode: "contain",
              width: 420,
              height: 420,
            }}
            source={require('../adminback.png')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 25,
  },
  con:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-around'
  }
});
