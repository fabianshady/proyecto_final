import React, { useContext, useState } from 'react';
import { StyleSheet, View, Button, TextInput, ToastAndroid } from 'react-native';
import { Text } from 'react-native-elements';
import { FContext } from '../Navigations/Context/Context';

export default function AsignarProy({ navigation }) {
    const { currentproy } = useContext(FContext);

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    const [asigproy, setAsigproy] = useState({
        id_proyector: '',
        fecha: date,
        hora_entrega: '',
        hora_regreso: '',
        nombre_usuario: ''
    })


    const hChange1 = text => {
        setAsigproy({
            ...asigproy,
            id_proyector: currentproy,
            nombre_usuario: text
        })
    }
    const hChange2 = text => {
        setAsigproy({
            ...asigproy,
            id_proyector: currentproy,
            hora_entrega: text
        })
    }
    const hChange3 = text => {
        setAsigproy({
            ...asigproy,
            id_proyector: currentproy,
            hora_regreso: text
        })
    }

    const hSubmit = () => {
        if (asigproy.nombre_usuario === '') {
            ToastAndroid.show('Llena todos los campos', ToastAndroid.SHORT);
            return
        }

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(asigproy)
        }
        fetch('https://api.bluemoonsports.works/api/asigproy', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        setAsigproy({
            id_proyector: '',
            fecha: date,
            hora_entrega: '',
            hora_regreso: '',
            nombre_usuario: ''
        })
        ToastAndroid.show('Asignado', ToastAndroid.SHORT);
    }

    const upDisp = id => {
        fetch('https://api.bluemoonsports.works/api/dispproy/' + id)
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
                    value={asigproy.nombre_usuario}

                />
                <Text h3>Hora de entrada</Text>
                <TextInput
                    placeholder='00:00'

                    onChangeText={e => hChange2(e)}
                    value={asigproy.hora_entrega}

                />
                <Text h3>Hora de salida</Text>
                <TextInput
                    placeholder='00:00'

                    onChangeText={e => hChange3(e)}
                    value={asigproy.hora_regreso}
                />
                <Button
                    title='Asignar'
                    onPress={() => { hSubmit(); upDisp(asigproy.id_proyector) }}
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