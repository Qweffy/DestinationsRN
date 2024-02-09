import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { orderByIsTop } from '../../utils/Destinations'

export const selectTopLevelDestinations = (state: RootState) => {
  const topLevelDestinations = state.destinations.topLevelIds
    .map((id) => state.destinations.entities[id])
    .filter((destination) => destination && destination.fatherDestination === 0 && destination.id !== 100)

  return orderByIsTop(topLevelDestinations)
}

export const selectDestinationChildren = createSelector(
  [(state: RootState) => state.destinations.entities, (state: RootState) => state.destinations.selectedDestinationId],
  (entities, selectedId) => {
    if (!selectedId) return []
    const selectedDestination = entities[selectedId]

    if (!selectedDestination || !selectedDestination.childs) return []

    return selectedDestination.childs.map((childId) => entities[childId]).filter(Boolean)
  },
)

export const selectChildDestinationNames = createSelector(
  [(state: RootState, childIds: number[]) => childIds.map((id) => state.destinations.entities[id])],
  (childDestinations) => childDestinations.map((dest) => dest?.destinationData.translatableName.en || 'Unknown'),
)

export const selectDestinationDetailById = createSelector(
  [(state: RootState, destinationId: number) => state.destinations.entities[destinationId]],
  (destination) => destination,
)
