import React from 'react'
import { FlatList } from 'react-native'

import { DestinationCard } from '../DestinationCard'
import { DestinationsListProps } from './DestinationsList.types'

export const DestinationsList = ({ destinations, onDestinationPress }: DestinationsListProps) => (
  <FlatList
    data={destinations}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <DestinationCard destination={item} onPress={() => onDestinationPress(item.id)} />}
  />
)
