import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from 'expo-constants';
import Zona11 from "../Screens/Proys/Zona11";
import Zona22 from "../Screens/Proys/Zona22";
import Zona33 from "../Screens/Proys/Zona33";


const Tab = createMaterialTopTabNavigator();
export default function ProysTop(){
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
            component={Zona11}
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
            component={Zona22}
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
            component={Zona33}
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