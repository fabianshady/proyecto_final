import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsignarLab from "../Screens/AsignarLabs";
import Zona1 from "../Screens/Labs/Zona1";
import ViewLabs from "../Screens/ViewLabs";

const Stack = createNativeStackNavigator();

export default function StackLabs(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeS" component={Zona1} options={{headerShown: false}}/>
            <Stack.Screen name="AsignarLabs" component={AsignarLab} options={{headerShown: false}}/>
            <Stack.Screen name="ViewLabs" component={ViewLabs} options={{headerShown: false}}/>
            
        </Stack.Navigator>
        
        
    )
}