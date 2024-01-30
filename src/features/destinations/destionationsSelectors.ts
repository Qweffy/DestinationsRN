import { RootState } from '../../store/store'
import { orderByIsTop } from '../../utils/Destinations'

export const selectTopLevelDestinations = (state: RootState) => {
  const topLevelDestinations = state.destinations.topLevelIds
    .map((id) => state.destinations.entities[id])
    .filter((destination) => destination && destination.fatherDestination === 0 && destination.id !== 100)

  return orderByIsTop(topLevelDestinations)
}
