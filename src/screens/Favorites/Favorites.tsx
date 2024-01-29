import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useGetDestinationsQuery } from '../../api/services'
import { setSelectedDestinationId } from '../../features/destinations'

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

export const Favorites = () => {
  const { data, error, isLoading } = useGetDestinationsQuery()
  const dispatch = useDispatch()
  const selectedDestinationId = useSelector((state) => state.destinations.selectedDestinationId)

  if (isLoading) return <Text>Cargando...</Text>
  if (error) return <Text>Error al cargar los destinos</Text>

  const handleSelectDestination = (id) => {
    dispatch(setSelectedDestinationId(id))
  }

  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
      {data?.data.map((destination) => (
        <TouchableOpacity
          key={destination.id}
          style={[
            styles.destinationItem,
            // Resaltar si el destino está seleccionado
            destination.id === selectedDestinationId ? styles.selectedItem : null,
          ]}
          onPress={() => handleSelectDestination(destination.id)}>
          <Text>{destination.destinationData.translatableName.es}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
