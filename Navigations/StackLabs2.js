import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsignarLab from "../Screens/AsignarLabs";
import ViewLabs from "../Screens/ViewLabs";
import Zona2 from "../Screens/Labs/Zona2";

const Stack = createNativeStackNavigator();

export default function StackLabs2(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeS" component={Zona2} options={{headerShown: false}}/>
            <Stack.Screen name="AsignarLabs" component={AsignarLab} options={{headerShown: false}}/>
            <Stack.Screen name="ViewLabs" component={ViewLabs} options={{headerShown: false}}/>
            
        </Stack.Navigator>
        
        
    )
}