import { NormalizedDestination } from '../../types'

export type HeaderCardProps = {
  destination: NormalizedDestination
}

export type DestinationCardProps = HeaderCardProps & {
  onPress: (id: number) => void
}
