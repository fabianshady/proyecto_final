import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { FContext } from '../../Navigations/Context/Context';
import { Text, Card } from 'react-native-elements';


export default function Zona1({navigation}) {
  const [labs1, setLabs1] = useState([])
  useEffect(() => {
    const getLabs1 = () => {
      fetch('https://api.bluemoonsports.works/api/labs1')
        .then(res => res.json())
        .then(res => setLabs1(res))
    }
    getLabs1()
  }, [])
  const {setCond,setCurrentlab} = useContext(FContext);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {labs1.map((p, index) => (
          <Card key={index} containerStyle={{
            borderRadius: 30,
            backgroundColor: '#fff',
            minWidth: 250

          }}>
            <Card.Title>{p.nombre}</Card.Title>
            <View>
              <View style={styles.container3}>
                <Card.Image style={styles.image} source={require('../../icono.png')} />
                <View style={{paddingTop:10}}>
                <Text style={{backgroundColor: p.disponible === 1 ? 'green' : 'red', color:'white', width:150, borderRadius:10, textAlign: 'center'}}>{
                  p.disponible === 1 ? "Disponible" : "No disponible"
                }</Text>
                </View>
                <View style={{paddingTop:10}}>
                <Button
                  title={p.disponible === 1 ? "Asignar" : "Quien lo tiene?"}
                  color="black"
                  onPress={() => {setCond(true); setCurrentlab(p.id_lab); p.disponible === 1 ? navigation.navigate('AsignarLabs'):navigation.navigate('ViewLabs')}}
                />
                </View>
              </View>


            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00376b',
    alignItems: 'center',
    

  },
  container3: {
    flex: 1,
    alignItems:'center',
    flexDirection:'column',
    
  },
  image: {
    width: 150,
  },
});