import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsignarProy from "../Screens/AsignarProys";
import ViewLabs from "../Screens/ViewLabs";
import Zona33 from "../Screens/Proys/Zona33";

const Stack = createNativeStackNavigator();

export default function StackProys(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeS" component={Zona33} options={{headerShown: false}}/>
            <Stack.Screen name="AsignarProys" component={AsignarProy} options={{headerShown: false}}/>
            <Stack.Screen name="ViewLabs" component={ViewLabs} options={{headerShown: false}}/>
            
        </Stack.Navigator>
        
        
    )
}