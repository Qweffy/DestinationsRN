import React from 'react'
import { ApplicationProvider, Icon, IconRegistry, Layout, Text } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
})
const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to UI Kitten with Eva Icons!</Text>
        <Icon style={styles.icon} fill="#8F9BB3" name="star" />
      </Layout>
    </ApplicationProvider>
  </Provider>
)

export default App
