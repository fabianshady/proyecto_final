import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Button, TextInput, ToastAndroid } from 'react-native';
import { Text } from 'react-native-elements';
import { FContext } from '../Navigations/Context/Context';

export default function AsignarLab({ navigation }) {
  const { currentlab } = useContext(FContext);

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  const [asiglab, setAsiglab] = useState({
    id_lab: '',
    fecha: date,
    hora_inicio: '',
    hora_salida: '',
    nombre_usuario: ''
  })


  const hChange1 = text => {
    setAsiglab({
      ...asiglab,
      id_lab: currentlab,
      nombre_usuario: text
    })
  }
  const hChange2 = text => {
    setAsiglab({
      ...asiglab,
      id_lab: currentlab,
      hora_inicio: text
    })
  }
  const hChange3 = text => {
    setAsiglab({
      ...asiglab,
      id_lab: currentlab,
      hora_salida: text
    })
  }

  const hSubmit = () => {
    if (asiglab.nombre_usuario === '') {
      ToastAndroid.show('Llena todos los campos', ToastAndroid.SHORT);
      return
    }

    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(asiglab)
    }
    fetch('https://api.bluemoonsports.works/api/asiglab', requestInit)
      .then(res => res.json())
      .then(res => console.log(res))

    setAsiglab({
      id_lab: '',
      fecha: date,
      hora_inicio: '',
      hora_salida: '',
      nombre_usuario: ''
    })
    ToastAndroid.show('Asignado', ToastAndroid.SHORT);
  }

  const upDisp = id => {
    fetch('https://api.bluemoonsports.works/api/disp/' + id)
      .then(res => res.json())
      .then(res => console.log(res))
  }

  return (
    <View style={styles.container}>
      <Text h1>Asignar</Text>
      <View>
        <TextInput
          placeholder='nombre de usuario'
          onChangeText={e => hChange1(e)}
          value={asiglab.nombre_usuario}

        />
        <Text h3>Hora de entrada</Text>
        <TextInput
          placeholder='00:00'

          onChangeText={e => hChange2(e)}
          value={asiglab.hora_inicio}

        />
        <Text h3>Hora de salida</Text>
        <TextInput
          placeholder='00:00'

          onChangeText={e => hChange3(e)}
          value={asiglab.hora_salida}
        />
        <Button
          title='Asignar'
          onPress={() => { hSubmit(); upDisp(asiglab.id_lab) }}
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
});