import { NormalizedDestination } from '../../types'

export type DestinationsListProps = {
  destinations: NormalizedDestination[]
  onDestinationPress: (id: number) => void
}
