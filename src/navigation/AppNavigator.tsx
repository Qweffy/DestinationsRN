import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { BottomTabNavigator } from './navigators'

export const AppNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
)
