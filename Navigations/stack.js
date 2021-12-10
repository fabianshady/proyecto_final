import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reports from "../Screens/Reports";
import ViewReports from "../Screens/ViewReports";

const Stack = createNativeStackNavigator();

export default function StackN(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="HomeS" component={Reports} options={{headerShown: false}}/>
            <Stack.Screen name="ViewReports" component={ViewReports} options={{headerShown: false}}/>
            
        </Stack.Navigator>
        
        
    )
}