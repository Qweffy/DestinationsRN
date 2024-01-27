import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DestinationsState {
  selectedDestinationId: string | null
  filter: string
}

const initialState: DestinationsState = {
  selectedDestinationId: null,
  filter: '',
}

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setSelectedDestinationId(state, action: PayloadAction<string | null>) {
      state.selectedDestinationId = action.payload
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload
    },
  },
})

export const { setSelectedDestinationId, setFilter } = destinationsSlice.actions

// Reducer
export default destinationsSlice.reducer
