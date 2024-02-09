import React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'

import styles from './DestinationCard.styles'
import { HeaderCardProps } from './DestinationCard.types'

export const Header = ({ destination }: HeaderCardProps) => (
  <View style={[styles.headerContainer, destination.isTop && styles.headerHighlighted]}>
    <Text category="h6">{destination.destinationData.translatableName.en}</Text>
    {destination.isTop && (
      <Text category="label" style={styles.topLabel}>
        Featured
      </Text>
    )}
  </View>
)
