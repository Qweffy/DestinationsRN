import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types'

type DestinationDetailRouteProp = RouteProp<RootStackParamList, 'DestinationDetail'>

export type DestinationDetailProps = {
  route: DestinationDetailRouteProp
  navigation: StackNavigationProp<RootStackParamList, 'DestinationDetail'>
}
