import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { useGetDestinationsQuery } from '../../api/services'
import { setSelectedDestinationId } from '../../features/destinations'
import { TopNavigator } from '../../navigation/navigators/TopNavigator'
import { RootStackParamList } from '../../types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
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
      <View style={styles.container}>
        {data?.data.map((destination) => (
          <TouchableOpacity
            key={destination.id}
            style={[styles.destinationItem, destination.id === selectedDestinationId ? styles.selectedItem : null]}
            onPress={() => handleSelectDestination(destination.id)}>
            <Text>{destination.destinationData.translatableName.es}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}
