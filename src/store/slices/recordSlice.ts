import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carId: null,
}
export const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setCarId: (state, { payload }) => {
      state.carId = payload
    },
  },
})

export const { setCarId } = recordSlice.actions
