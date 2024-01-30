import React from 'react'
import { Image } from 'react-native'
import { Card } from '@ui-kitten/components'
import styles from './DestinationCard.styles'
import { DestinationCardProps } from './DestinationCard.types'
import { Header, Footer } from './DestinationCard.components'

const genericDestination = require('../../assets/genericDestination.png')

export const DestinationCard = ({ destination, onPress }: DestinationCardProps) => (
  <Card
    header={() => <Header destination={destination} />}
    footer={() => <Footer destination={destination} onPress={onPress} />}
    style={styles.card}>
    <Image source={genericDestination} style={styles.image} />
  </Card>
)
