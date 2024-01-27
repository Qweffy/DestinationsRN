import { configureStore } from '@reduxjs/toolkit'
import { destinationsApi } from '../api/services'
import { destinationsReducer } from '../features/destinations'

export const store = configureStore({
  reducer: {
    [destinationsApi.reducerPath]: destinationsApi.reducer,
    destinations: destinationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(destinationsApi.middleware)
      .concat(
        __DEV__
          ? // eslint-disable-next-line global-require
            require('redux-flipper').default() //
          : [],
      ),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
