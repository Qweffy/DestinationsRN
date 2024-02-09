import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NormalizedDestination } from '../../types'

interface DestinationsState {
  entities: { [id: string]: NormalizedDestination }
  topLevelIds: string[]
  selectedDestinationId: number | null
}

const initialState: DestinationsState = {
  entities: {},
  topLevelIds: [],
  selectedDestinationId: null,
}

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setDestinations(state, action: PayloadAction<any>) {
      const {
        entities: { destinations },
        result,
      } = action.payload
      state.entities = destinations
      state.topLevelIds = result.filter((id: string) => state.entities[id]?.fatherDestination === 0)
    },
    selectDestination(state, action: PayloadAction<number>) {
      state.selectedDestinationId = action.payload
    },
  },
})

export const { setDestinations, selectDestination } = destinationsSlice.actions
export default destinationsSlice.reducer
