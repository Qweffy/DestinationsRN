import React from 'react'
import { Text } from '@ui-kitten/components'
import { View } from 'react-native'
import styles from './DestinationDetail.styles'

interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => (
  <View style={styles.headerContainer}>
    <Text category="h6">{title}</Text>
  </View>
)

interface FooterProps {
  numEstablishments: number
}

export const Footer = ({ numEstablishments }: FooterProps) => (
  <View style={styles.footerContainer}>
    <Text>Establishments: {numEstablishments}</Text>
  </View>
)
