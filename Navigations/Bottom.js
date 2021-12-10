import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackN from "./stack";
import ProysTop from "./ProysTop";
import LabsTop from "./LabsTop";
import Home from "../Screens/Home";




const Tab = createBottomTabNavigator();
export default function Bottom(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor:"#6CABDD",
            tabBarInactiveTintColor:"#1C2C5B",
            tabBarShowLabel:true,
            tabBarLabelStyle:{
                fontSize:12
            },
            tabBarStyle:{
                paddingBottom:5,
                backgroundColor:"#f3f3f1"
            }
        }

        }
        >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarLabel:"Inicio",
                tabBarIcon:({color})=>(
                    <Ionicons name={"home"} size={20} color={color}/>
                )
            }}
            
            />
            <Tab.Screen
            name="Labs"
            component={LabsTop}
            options={{
                headerShown: false,
                tabBarLabel:"Laboratorios",
                tabBarIcon:({color})=>(
                    <Ionicons name={"laptop"} size={20} color={color}/>
                )
            }}
            />
            <Tab.Screen
            name="Proys"
            component={ProysTop}
            options={{
                headerShown: false,
                tabBarLabel:"Proyectores",
                tabBarIcon:({color})=>(
                    <Ionicons name={"tv"} size={20} color={color}/>
                )
            }}
            />
            <Tab.Screen
            name="Cinco"
            component={StackN}
            options={{
                headerShown: false,
                tabBarLabel:"Reportes",
                tabBarIcon:({color})=>(
                    <Ionicons name={"analytics"} size={20} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}
