import React, { useEffect } from 'react'
import { Image, ImageBackground, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Spinner } from '@ui-kitten/components'
import { useDispatch } from 'react-redux'
import styles from './LoadingHandler.styles'
import { useGetDestinationsQuery } from '../../api/services'
import { LoadingHandlerProps, SplashProps } from './LoadingHandler.types'
import { setDestinations } from '../../features/destinations/destinationsSlice'

const Logo = require('../../assets/logo.png')
const LoadingScreenBackground = require('../../assets/loading-screen-background.png')

const Splash = ({ showSpinner }: SplashProps) => (
  <SafeAreaView style={[styles.splash, styles.contentContainer]} edges={['top', 'right', 'left']}>
    <ImageBackground source={LoadingScreenBackground} style={styles.contentContainer} />
    <StatusBar barStyle={'dark-content'} />
    <Image source={Logo} />
    {showSpinner && <Spinner size="giant" />}
  </SafeAreaView>
)

export const LoadingHandler = ({ children }: LoadingHandlerProps) => {
  const dispatch = useDispatch()
  const { data, isLoading } = useGetDestinationsQuery(undefined)
  useEffect(() => {
    if (data && !isLoading) {
      dispatch(setDestinations(data))
    }
  }, [data, isLoading, dispatch])

  return (
    <View style={styles.container}>
      {children}
      {isLoading && <Splash showSpinner />}
    </View>
  )
}
