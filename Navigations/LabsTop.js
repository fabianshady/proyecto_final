import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from 'expo-constants';
import StackLabs from "./StackLabs";
import StackLabs2 from "./StackLabs2";
import StackLabs3 from "./StackLabs3";


const Tab = createMaterialTopTabNavigator();
export default function LabsTop(){
    return(
        <Tab.Navigator
        initialRouteName="Zona1"
        screenOptions={{
            tabBarActiveTintColor:"#6CABDD",
            tabBarInactiveTintColor:"#1C2C5B",
            tabBarShowLabel:true,
            tabBarLabelStyle:{
                fontSize:12
            },
            tabBarStyle:{
                paddingTop:Constants.statusBarHeight,
                paddingBottom:5,
                backgroundColor:"#f3f3f1"
            }
        }

        }
        >
            <Tab.Screen
            name="Zona1"
            component={StackLabs}
            options={{
                headerShown: false,
                tabBarLabel:"Zona 1",
                tabBarIcon:({color})=>(
                    <Ionicons name={"pin"} size={20} color={color}/>
                )
            }}
            
            />
            <Tab.Screen
            name="Zona2"
            component={StackLabs2}
            options={{
                headerShown: false,
                tabBarLabel:"Zona 2",
                tabBarIcon:({color})=>(
                    <Ionicons name={"pin"} size={20} color={color}/>
                )
            }}
            />
             <Tab.Screen
            name="Zona3"
            component={StackLabs3}
            options={{
                headerShown: false,
                tabBarLabel:"Zona 3",
                tabBarIcon:({color})=>(
                    <Ionicons name={"pin"} size={20} color={color}/>
                )
            }}
            />
            
        </Tab.Navigator>
    )
}