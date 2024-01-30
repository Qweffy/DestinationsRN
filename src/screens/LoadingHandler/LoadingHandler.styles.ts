import { StyleSheet, ViewStyle } from 'react-native'

type LoadingHandlerStyles = {
  container: ViewStyle
  splash: ViewStyle
  contentContainer: ViewStyle
}

export default StyleSheet.create<LoadingHandlerStyles>({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  splash: {
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
})
