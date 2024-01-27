import React from 'react'
import { SafeAreaView } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'

const App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to UI Kitten</Text>
      </Layout>
    </SafeAreaView>
  </ApplicationProvider>
)

export default App
