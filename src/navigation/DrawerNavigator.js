import React from 'react'
import { THEME } from "../theme"
import { AboutScreen } from "../screens/AboutScreen"
import { CreateScreen } from "../screens/CreateScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { BottomTabNavigator } from "./TabNavigator"
import { newPostStackNavigator } from "./StackNavigator"

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => (
  <Drawer.Navigator drawerContentOptions={{
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: 'open-bold'
    }
  }}>
    <Drawer.Screen name='PostTabs' component={BottomTabNavigator} options={{
      drawerLabel: 'Main',
    }} />
    <Drawer.Screen name='Create' component={newPostStackNavigator} options={{
      drawerLabel: 'New post'
    }} />
    <Drawer.Screen name='About' component={AboutScreen} options={{
      drawerLabel: 'About application'
    }} />
  </Drawer.Navigator>
)
