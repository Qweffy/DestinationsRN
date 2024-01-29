import React from 'react'
import { TopNavigation, TopNavigationAction, Layout } from '@ui-kitten/components'
import { NavigationProp } from '@react-navigation/native'
import { CustomIcon } from '../../components/CustomIcon'
import { RootStackParamList } from '../../types'

interface TopNavigatorProps {
  title: string
  navigation: NavigationProp<RootStackParamList>
}
export const TopNavigator = ({ title, navigation }: TopNavigatorProps) => {
  const navigateBack = () => {
    navigation.goBack()
  }

  const renderBackAction = () => <TopNavigationAction icon={<CustomIcon name="arrow-back" />} onPress={navigateBack} />

  const renderStarAction = () => (
    <TopNavigationAction icon={<CustomIcon name="star" />} onPress={() => console.log('Agregar a Favoritos')} />
  )

  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        title={title}
        accessoryLeft={renderBackAction}
        accessoryRight={renderStarAction}
      />
    </Layout>
  )
}
