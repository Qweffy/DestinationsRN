import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { TopNavigator } from '../../navigation/navigators/TopNavigator'
import { RootStackParamList } from '../../types'
import { DestinationCard } from '../../components/DestinationCard'
import { selectTopLevelDestinations } from '../../features/destinations/destionationsSelectors'
import ScreenWrapper from '../../components/ScreenWrapper'

type DestinationsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Destinations'>
}

export const Destinations = ({ navigation }: DestinationsProps) => {
  const topLevelDestinations = useSelector(selectTopLevelDestinations)

  return (
    <ScreenWrapper>
      <TopNavigator title="Destinos" navigation={navigation} />
      <FlatList
        data={topLevelDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DestinationCard destination={item} onSeeMorePress={() => {}} />}
      />
    </ScreenWrapper>
  )
}
