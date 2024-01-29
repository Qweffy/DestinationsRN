import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Card, Text } from '@ui-kitten/components'

const genericDestination = require('../../assets/genericDestination.png')

const styles = StyleSheet.create({
  card: {
    margin: 2,
  },
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerHighlighted: {
    backgroundColor: '#DDEEFF',
  },
  topLabel: {
    marginTop: 4,
    color: 'orange',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  seeMoreText: {
    color: '#007bff',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },
})
export const DestinationCard = ({ destination, onSeeMorePress }) => {
  const Header = () => (
    <View style={[styles.headerContainer, destination.isTop && styles.headerHighlighted]}>
      <Text category="h6">{destination.destinationData.translatableName.en}</Text>
      {destination.isTop && (
        <Text category="label" style={styles.topLabel}>
          Featured
        </Text>
      )}
    </View>
  )

  const Footer = () => (
    <View style={styles.footerContainer}>
      <Text category="p1">Establecimientos: {destination.numEstablishments}</Text>
      {destination.childs && destination.childs.length > 0 && (
        <TouchableOpacity onPress={onSeeMorePress}>
          <Text category="label" style={styles.seeMoreText}>
            Ver más
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )

  return (
    <Card header={Header} footer={Footer} status="warning" style={styles.card}>
      <Image source={genericDestination} style={styles.image} />
    </Card>
  )
}
