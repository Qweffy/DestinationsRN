import { NormalizedDestination } from './destinationTypes'

export type RootStackParamList = {
  Destinations: {
    destinations: NormalizedDestination[]
    parentDestinationId: number
  }
  DestinationDetail: {
    childId: number
  }
}
