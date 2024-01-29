import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import { Destinations } from '../../screens/Destinations'
import { Favorites } from '../../screens/Favorites'
import { CustomIcon } from '../../components/CustomIcon'

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Destinos" icon={<CustomIcon name="map-outline" />} />
    <BottomNavigationTab title="Favoritos" icon={<CustomIcon name="star-outline" />} />
  </BottomNavigation>
)

export const BottomTabNavigator = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Destinos" component={Destinations} />
    <Screen name="Favoritos" component={Favorites} />
  </Navigator>
)
