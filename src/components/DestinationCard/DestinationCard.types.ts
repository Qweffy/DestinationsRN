import { Destination } from '../../types'

export type HeaderCardProps = {
  destination: Destination
}

export type DestinationCardProps = HeaderCardProps & {
  onPress: () => void
}
