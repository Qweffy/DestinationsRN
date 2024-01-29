import React from 'react'
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { AppNavigator } from './src/navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <AppNavigator />
      </Layout>
    </ApplicationProvider>
  </Provider>
)

export default App
