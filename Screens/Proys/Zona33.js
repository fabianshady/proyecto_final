import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
export default function Zona33() {
    return (
      <View style={styles.container}>
        <Image style={{
        resizeMode: "center",
        borderColor: "black",
        borderWidth: 5,
        width: 350,
        height: 300,
      }} source={require('../../kevin.jpg')} />
      <StatusBar style="auto" />
          
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC659',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });