import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { useGetDestinationsQuery } from '../../api/services'
import { setSelectedDestinationId } from '../../features/destinations'
import { TopNavigator } from '../../navigation/navigators/TopNavigator'
import { RootStackParamList } from '../../types'
import { DestinationCard } from '../../components/Card/Card'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: '100%',
  },
})

type DestinationsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Destinations'>
}

export const Destinations = ({ navigation }: DestinationsProps) => {
  const { data, error, isLoading } = useGetDestinationsQuery()
  const dispatch = useDispatch()
  const selectedDestinationId = useSelector((state) => state.destinations.selectedDestinationId)

  if (isLoading) return <Text>Cargando...</Text>
  if (error) return <Text>Error al cargar los destinos</Text>

  const handleSelectDestination = (id) => {
    dispatch(setSelectedDestinationId(id))
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigator title="Destinos" navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {data?.data.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onSeeMorePress={() => handleSelectDestination(destination.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
