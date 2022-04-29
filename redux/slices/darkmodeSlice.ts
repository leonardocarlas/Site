import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface DarkmodeState {
  isDarkmode: boolean
}

// Define the initial state using that type
const initialState: DarkmodeState = {
  isDarkmode : false
}

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.isDarkmode = !state.isDarkmode;
    }
  },
})

export const { toggleDarkmode } = darkmodeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDarkmode = (state: RootState) => state.darkmode    /// PROBLEMA QUA

export default darkmodeSlice.reducer