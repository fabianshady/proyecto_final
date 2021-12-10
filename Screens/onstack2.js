import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function Onstack2({navigation}) {
    return (
      <View style={styles.container3}>
      <View style={styles.container}>
        <Text style={styles.font}>Estan todos mis perfiles{"\n"} de redes sociales en las {"\n"}diferentes secciones. </Text>

        <StatusBar style="auto" />


      </View>
      <View style={styles.container2}>
        <Button
          title="Regresar"
          onPress={() => navigation.goBack()}
        />

      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      
    },
    container2: {
      flex: 0,
      backgroundColor: '#fff',
      
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    container3: {
      flex: 1,
      backgroundColor: '#fff',
    
    justifyContent: 'space-around',
    },
    font:{
      fontSize:25,
      
    }
  });