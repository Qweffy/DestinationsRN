import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'
import { largeSpace } from '../../styles/Spacing'

type DestinationDetailStyleType = {
  layout: ViewStyle
  card: ViewStyle
  headerContainer: ViewStyle
  footerContainer: ViewStyle
  image: ImageStyle
  loader: ViewStyle
}

export default StyleSheet.create<DestinationDetailStyleType>({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: largeSpace,
  },
  card: {
    width: '90%',
  },
  headerContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 200,
  },
  loader: {
    marginTop: 20,
  },
})
