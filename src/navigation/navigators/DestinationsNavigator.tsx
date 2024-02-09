import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Destinations } from '../../screens/Destinations'
import { DestinationDetail } from '../../screens/DestinationDetail'
import { RootStackParamList } from '../../types'

const Stack = createStackNavigator<RootStackParamList>()

export const DestinationsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Destinations" component={Destinations} />
    <Stack.Screen name="DestinationDetail" component={DestinationDetail} />
  </Stack.Navigator>
)
