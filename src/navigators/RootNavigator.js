import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign, Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'

import HomeNavigator from './HomeNavigator';
import ListNavigator from './ListNavigator';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {


    const CustomTabBarButton = ({ children }) => {
        return (
            <TouchableOpacity
                style={{
                    width: 58,
                    height: 58,
                    backgroundColor: '#5C3EBC',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 33,
                    marginTop: -10,
                    borderWidth: 2,
                    borderColor: 'white'
                }}
            >
                <Feather name="list" size={24} color="#FFD00C" />
            </TouchableOpacity>
        )
    }
    return (
        <Tab.Navigator initialRouteName='list'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5C3EBC',
                tabBarInactiveTintColor: '#959595',
                headerShown: false,
                tabBarStyle: {
                    height: 80
                }
            }}

        >
            <Tab.Screen

                name="AnaSayfa" component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="list" component={ListNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen name="User" component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="user" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Personal" component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="gift" size={24} color="black" />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default RootNavigator