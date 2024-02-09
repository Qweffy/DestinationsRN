import React from 'react'
import { TopNavigation, TopNavigationAction, Layout } from '@ui-kitten/components'
import { NavigationProp } from '@react-navigation/native'
import { CustomIcon } from '../../components/CustomIcon'
import { RootStackParamList } from '../../types'

interface TopNavigatorProps {
  navigation: NavigationProp<RootStackParamList>
}
export const TopNavigator = ({ navigation, onBackPress }: TopNavigatorProps & { onBackPress?: () => void }) => {
  const navigateBack = () => {
    if (onBackPress) {
      onBackPress()
    } else {
      navigation.goBack()
    }
  }

  const renderBackAction = () => <TopNavigationAction icon={<CustomIcon name="arrow-back" />} onPress={navigateBack} />

  return (
    <Layout level="1">
      <TopNavigation alignment="center" accessoryLeft={renderBackAction} />
    </Layout>
  )
}
