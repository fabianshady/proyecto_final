import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onstack1 from "../Screens/onstack1";
import Onstack2 from "../Screens/onstack2";
import Reports from "../Screens/Reports";

const Stack = createNativeStackNavigator();

export default function StackN(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeS" component={Reports} options={{headerShown: false}}/>
            <Stack.Screen name="Onstack1" component={Onstack1} options={{headerShown: false}}/>
            <Stack.Screen name="Os2" component={Onstack2} options={{headerShown: false}}/>
        </Stack.Navigator>
        
        
    )
}