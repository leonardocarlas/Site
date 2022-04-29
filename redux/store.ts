import { configureStore } from '@reduxjs/toolkit'

import darkmodeReducer from './slices/darkmodeSlice'


export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch