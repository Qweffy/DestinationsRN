import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NormalizedSchema } from 'normalizr'
import { Destination } from '../../types'

interface DestinationsState {
  entities: { [id: string]: Destination }
  topLevelIds: string[]
}

const initialState: DestinationsState = {
  entities: {},
  topLevelIds: [],
}

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setDestinations(
      state,
      action: PayloadAction<NormalizedSchema<{ destinations: { [id: string]: Destination } }, string[]>>,
    ) {
      const {
        entities: { destinations },
        result,
      } = action.payload
      state.entities = destinations
      state.topLevelIds = result.filter((id) => state.entities[id]?.fatherDestination === 0)
    },
  },
})

export const { setDestinations } = destinationsSlice.actions
export default destinationsSlice.reducer
