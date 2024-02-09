import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TopNavigator } from '../../navigation/navigators'
import {
  selectDestinationChildren,
  selectTopLevelDestinations,
} from '../../features/destinations/destionationsSelectors'
import ScreenWrapper from '../../components/ScreenWrapper'
import { selectDestination } from '../../features/destinations/destinationsSlice'
import { DestinationsList } from '../../components/DestinationsList'
import { DestinationsProps } from './Destinations.types'

export const Destinations = ({ navigation }: DestinationsProps) => {
  const dispatch = useDispatch()
  const topLevelDestinations = useSelector(selectTopLevelDestinations)
  const destinationChildren = useSelector(selectDestinationChildren)
  const [isTopLevel, setIsTopLevel] = useState(true)

  const handlePress = (id: number) => {
    const destination =
      topLevelDestinations.find((dest) => dest.id === id) || destinationChildren.find((dest) => dest.id === id)

    if (!destination) return

    if (!destination.isFinalNode && (destination.childs?.length === 0 || !destination.childs)) {
      return
    }

    dispatch(selectDestination(id))

    if (destination.isFinalNode) {
      navigation.navigate('DestinationDetail', { childId: id })
    } else {
      setIsTopLevel(false)
    }
  }

  const handleBackToTopLevel = () => {
    setIsTopLevel(true)
  }

  return (
    <ScreenWrapper>
      {!isTopLevel && <TopNavigator navigation={navigation} onBackPress={handleBackToTopLevel} />}
      <DestinationsList
        destinations={isTopLevel ? topLevelDestinations : destinationChildren}
        onDestinationPress={handlePress}
      />
    </ScreenWrapper>
  )
}
