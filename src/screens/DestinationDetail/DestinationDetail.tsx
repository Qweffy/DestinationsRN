import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '@ui-kitten/components'
import { View, Image } from 'react-native'
import { RootState } from '../../store/store'
import { selectDestinationDetailById } from '../../features/destinations/destionationsSelectors'
import { TopNavigator } from '../../navigation/navigators'
import ScreenWrapper from '../../components/ScreenWrapper'
import styles from './DestinationDetail.styles'
import { DestinationDetailProps } from './DestinationDetail.types'
import { Footer, Header } from './DestinationDetail.components'

export const DestinationDetail = ({ route, navigation }: DestinationDetailProps) => {
  const { childId } = route.params
  const destination = useSelector((state: RootState) => selectDestinationDetailById(state, childId))

  return (
    <ScreenWrapper>
      <TopNavigator navigation={navigation} />
      <View style={styles.layout}>
        <Card
          header={() => <Header title={destination?.destinationData.translatableName.en} />}
          footer={() => <Footer numEstablishments={destination?.numEstablishments} />}
          style={styles.card}>
          {destination?.destinationData.photographs && destination.destinationData.photographs.length > 0 && (
            <Image
              style={styles.image}
              source={{
                uri: `https://cdn-int.stay-app.com/${destination.destinationData.photographs[0]}/${destination.destinationData.photographs[0]}`,
              }}
            />
          )}
        </Card>
      </View>
    </ScreenWrapper>
  )
}
