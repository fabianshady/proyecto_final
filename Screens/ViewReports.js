import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DataTable } from 'react-native-paper';
import { FContext } from '../Navigations/Context/Context';

const ViewReports = ({ navigation }) => {
  const { reportproy, reportlab, condi } = useContext(FContext);

  return (


    <View style={styles.container}>

      {condi == true ?
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Usuario</DataTable.Title>
            <DataTable.Title>Laboratorio</DataTable.Title>
            <DataTable.Title>Ubicacion</DataTable.Title>
            <DataTable.Title>H. entrada</DataTable.Title>
            <DataTable.Title>H. salida</DataTable.Title>
          </DataTable.Header>
          {reportlab.map((a) =>
            <DataTable.Row key={a.id_pres_lab}>
              <DataTable.Cell>{a.nombres} {a.apellidos}</DataTable.Cell>
              <DataTable.Cell>{a.name}</DataTable.Cell>
              <DataTable.Cell>{a.nombre}</DataTable.Cell>
              <DataTable.Cell>{a.hora_inicio}</DataTable.Cell>
              <DataTable.Cell>{a.hora_salida}</DataTable.Cell>
            </DataTable.Row>

          )}
        </DataTable> :
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Usuario</DataTable.Title>
            <DataTable.Title>Laboratorio</DataTable.Title>
            <DataTable.Title>Ubicacion</DataTable.Title>
            <DataTable.Title>H. entrada</DataTable.Title>
            <DataTable.Title>H. salida</DataTable.Title>
          </DataTable.Header>
          {reportlab.map((a) =>
            <DataTable.Row key={a.id_pres_lab}>
              <DataTable.Cell>{a.nombres} {a.apellidos}</DataTable.Cell>
              <DataTable.Cell>{a.name}</DataTable.Cell>
              <DataTable.Cell>{a.nombre}</DataTable.Cell>
              <DataTable.Cell>{a.hora_inicio}</DataTable.Cell>
              <DataTable.Cell>{a.hora_salida}</DataTable.Cell>
            </DataTable.Row>

          )}
        </DataTable>
      }
      <Button
        title="Regresar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
export default ViewReports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 10
  },
});