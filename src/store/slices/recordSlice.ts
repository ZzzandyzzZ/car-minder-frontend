import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  carId: '',
  user: { label: '', id: '' },
  date: new Date().getTime(),
}
export const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setCarId: (state, { payload }) => {
      state.carId = payload
    },
    setUserData: (state, { payload }) => {
      state.user = payload
    },
    setDate: (state, { payload }) => {
      state.date = payload
    },
  },
})

export const { setCarId, setDate, setUserData } = recordSlice.actions
