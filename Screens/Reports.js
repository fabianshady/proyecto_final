import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';


const Reports = ({ navigation }) => {
  return (
    <View style={styles.container3}>
      <View style={styles.container}>
        <Text h1 style={styles.font}>Reportes</Text>
        <Text h4 style={styles.font}>Laboratorios</Text>

        <StatusBar style="auto" />


      </View>
      <View style={styles.container2}>
        <Button
          title="Hoy"
          onPress={() => navigation.navigate('Onstack1')}
        />
        <Button title="Ayer"
          onPress={() => navigation.navigate('Os2')}
        />
        <Button title="Antier"
          onPress={() => navigation.navigate('Os2')}
        />
      </View>

      <View style={styles.container}>
        <Text h1 style={styles.font}>Reportes</Text>
        <Text h4 style={styles.font}>Proyectores</Text>

        <StatusBar style="auto" />


      </View>
      <View style={styles.container2}>
        <Button
          title="Hoy"
          onPress={() => navigation.navigate('Onstack1')}
        />
        <Button title="Ayer"
          onPress={() => navigation.navigate('Os2')}
        />
        <Button title="Antier"
          onPress={() => navigation.navigate('Os2')}
        />
      </View>


    </View>
  );
}

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#FFC659',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  container2: {
    flex: 0,
    backgroundColor: '#FFC659',

    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  container3: {
    flex: 1,
    backgroundColor: '#FFC659',

    justifyContent: 'space-around',
  },
  font: {
    fontSize: 25,

  }
});


