import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from 'expo-constants';
import StackProys from "./StackProys";
import StackProys2 from "./StackProys2";
import StackProys3 from "./StackProys3";


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
            component={StackProys}
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
            component={StackProys2}
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
            component={StackProys3}
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