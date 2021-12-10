import React, { useContext, useState } from 'react';
import { StyleSheet, View, Button, TextInput, ToastAndroid } from 'react-native';
import { Text } from 'react-native-elements';
import { FContext } from '../Navigations/Context/Context';

export default function ViewLabs({ navigation }) {
    
    const { cond, viewproy, setCond, getViewproy, currentproy } = useContext(FContext);
    const upDisp = id => {
        fetch('https://api.bluemoonsports.works/api/dispproy/' + id)
            .then(res => res.json())
            .then(res => console.log(res))
    }

    const upAct = id => {
        fetch('https://api.bluemoonsports.works/api/actproy/' + id)
            .then(res => res.json())
            .then(res => console.log(res))
    }


    return (
        <View style={styles.container}>
            <Text h1>Lo tiene</Text>
            {cond == true ? getViewproy(currentproy) : null}
            {viewproy.map((a) =>
            <View>
                <Text h4>{a.nombre_usuario}</Text>
                <Text h3>Hora de entrada</Text>
                <Text h4>{a.hora_entrega}</Text>
                <Text h3>Hora de salida</Text>
                <Text h4>{a.hora_regreso}</Text>
                <Button
                    title='Fin'
                    onPress={() => {upAct(a.id_proyector);upDisp(a.id_proyector)}}
                />
            </View>
            )}
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