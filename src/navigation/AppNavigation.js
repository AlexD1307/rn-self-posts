import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigator } from "./DrawerNavigator"

export const AppNavigation = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
)
