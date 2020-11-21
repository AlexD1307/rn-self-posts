import React from 'react'
import { Platform } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { THEME } from "../theme"
import { Ionicons } from "@expo/vector-icons"
import { BookedStackNavigator, postStackNavigator } from "./StackNavigator"

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

export const BottomTabNavigator = () => (
  <Tab.Navigator
    barStyle={Platform.OS === 'android' && {backgroundColor: THEME.MAIN_COLOR}}
    shifting={Platform.OS === 'android'}
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let iconName = route.name === 'Post' ? 'ios-albums' : 'ios-star'
        return <Ionicons name={iconName} color={color} size={20}/>
      },
    })}>
    <Tab.Screen name='Post' component={postStackNavigator} options={{
      tabBarLabel: 'All',
    }}/>
    <Tab.Screen name='Booked' component={BookedStackNavigator} options={{
      tabBarLabel: 'Favorites',
    }}/>
  </Tab.Navigator>
)
