import React, {useContext} from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import { Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { FContext } from "../Navigations/Context/Context";


const Reports = ({ navigation }) => {
  const {getReportlab, getReportproy, setCondi} = useContext(FContext);

  var today = new Date();
  var hoy = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var ayer = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 1);
  var antier = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 2);


  return (
    <View style={styles.container3}>
      <Text h1 style={styles.font}>Reportes</Text>
      <Image
            style={{
              resizeMode: "contain",
              width: 420,
              height: 260,
            }}
            source={require('../analytics.png')} />
      <View style={styles.container2}>
      <Text h4 style={styles.font}>Laboratorios</Text>
        <Button
          title="Hoy"
          onPress={() => {navigation.navigate('ViewReports'); getReportlab(hoy); setCondi(true)}}
        />
        <Button title="Ayer"
          onPress={() => {navigation.navigate('ViewReports'); getReportlab(ayer); setCondi(true)}}
        />
        <Button title="Antier"
          onPress={() => {navigation.navigate('ViewReports'); getReportlab(antier); setCondi(true)}}
        />
      </View>
      <View style={styles.container2}>
      <Text h4 style={styles.font}>Proyectores</Text>
        <Button
          title="Hoy"
          onPress={() => {navigation.navigate('ViewReports'); getReportproy(hoy); setCondi(true)}}
        />
        <Button title="Ayer"
          onPress={() => {navigation.navigate('ViewReports'); getReportproy(ayer); setCondi(true)}}
        />
        <Button title="Antier"
          onPress={() => {navigation.navigate('ViewReports'); getReportproy(antier); setCondi(true)}}
        />
      </View>


    </View>
  );
}

export default Reports;

const styles = StyleSheet.create({
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
  font: {
    fontSize: 25,
    textAlign:'center'
  }
});


