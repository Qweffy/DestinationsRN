import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '@ui-kitten/components'

import styles from './DestinationCard.styles'
import { DestinationCardProps, HeaderCardProps } from './DestinationCard.types'

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

export const Footer = ({ destination, onPress }: DestinationCardProps) => (
  <View style={styles.footerContainer}>
    <Text category="p1">Establishments: {destination.numEstablishments}</Text>
    {destination.childs && destination.childs.length > 0 && (
      <TouchableOpacity onPress={onPress}>
        <Text category="label" style={styles.seeMoreText}>
          See more
        </Text>
      </TouchableOpacity>
    )}
  </View>
)
