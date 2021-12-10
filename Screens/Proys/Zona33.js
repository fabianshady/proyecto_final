import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { FContext } from '../../Navigations/Context/Context';
import { Text, Card } from 'react-native-elements';


export default function Zona33({navigation}) {
  const [proys3, setProys3] = useState([])
  useEffect(() => {
    const getProys3 = () => {
      fetch('https://api.bluemoonsports.works/api/proys3')
        .then(res => res.json())
        .then(res => setProys3(res))
    }
    getProys3()
  }, [])
  const {setCond, setCurrentproy } = useContext(FContext);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {proys3.map((p, index) => (
          <Card key={index} containerStyle={{
            borderRadius: 30,
            backgroundColor: '#fff',
            minWidth: 250

          }}>
            
            <View>
              <View style={styles.container3}>
                <Card.Image style={styles.image} source={require('../../proyector.png')} />
                <View style={{paddingTop:10}}>
                <Text style={{backgroundColor: p.disponible === 1 ? 'green' : 'red', color:'white', width:150, borderRadius:10, textAlign: 'center'}}>{
                  p.disponible === 1 ? "Disponible" : "No disponible"
                }</Text>
               
                </View>
                <View style={{paddingTop:10}}>
                <Text style={{textAlign: 'center', paddingBottom:10, fontSize:20}}>{p.marca}</Text>
                <Text style={{textAlign: 'center', paddingBottom:10, fontSize:17}}>{p.modelo}</Text>
                <Button
                  title={p.disponible === 1 ? "Asignar" : "Quien lo tiene?"}
                  color="black"
                  onPress={() => {setCond(true); setCurrentproy(p.id_proyector); p.disponible === 1 ? navigation.navigate('AsignarProys'):navigation.navigate('ViewProys')}}
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
    backgroundColor: '#551469',
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