import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { DestinationsStackNavigator } from './navigators/DestinationsNavigator'

export const AppNavigator = () => (
  <NavigationContainer>
    <DestinationsStackNavigator />
  </NavigationContainer>
)
