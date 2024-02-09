import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

type DestinationCardStyleType = {
  container: ViewStyle
  card: ViewStyle
  headerContainer: ViewStyle
  headerHighlighted: TextStyle
  topLabel: TextStyle
  footerContainer: ViewStyle
  seeMoreText: TextStyle
  image: ImageStyle
}

export default StyleSheet.create<DestinationCardStyleType>({
  container: { flex: 1 },
  card: {
    margin: 2,
  },
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerHighlighted: {
    backgroundColor: '#DDEEFF',
  },
  topLabel: {
    marginTop: 4,
    color: 'orange',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  seeMoreText: {
    color: '#007bff',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },
})
