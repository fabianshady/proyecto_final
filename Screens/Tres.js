import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

const Tres = () => {
  return (
    <View style={styles.container}>
      <Image style={{
        resizeMode: "center",
        borderColor: "black",
        borderWidth: 5,
        width: 350,
        height: 580,
      }} source={require('../ig.jpg')} />
      <StatusBar style="auto" />

    </View>
  );
}

export default Tres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC659',
    alignItems: 'center',
    justifyContent: 'center',
  },
});