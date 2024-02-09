import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Text } from '@ui-kitten/components'
import { View } from 'react-native'
import styles from './DestinationCard.styles'
import { DestinationCardProps } from './DestinationCard.types'
import { Header } from './DestinationCard.components'
import { RootState } from '../../store/store'
import { selectChildDestinationNames } from '../../features/destinations/destionationsSelectors'

export const DestinationCard = ({ destination, onPress }: DestinationCardProps) => {
  const childDestinationNames = useSelector((state: RootState) =>
    selectChildDestinationNames(state, destination.childs || []),
  )

  return (
    <Card
      onPress={() => onPress(destination.id)}
      header={() => <Header destination={destination} />}
      style={styles.card}>
      <View style={styles.container}>
        {childDestinationNames.length > 0 ? (
          <>
            <Text category="h6">Destinations Within:</Text>
            {childDestinationNames.map((name) => (
              <Text key={name}>{name}</Text>
            ))}
          </>
        ) : (
          <Text>No additional destinations within this location.</Text>
        )}
      </View>
    </Card>
  )
}
