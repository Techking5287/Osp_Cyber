import { createSlice } from '@reduxjs/toolkit'
export const InputSlice = createSlice({
  name: 'input',
  initialState: {
    Gameover: true,
    Auth: '',
    Minute: 0,
    Seconds: 0
  },
  reducers: {
    InputGameoverauth: (state, action) => {
      state.Gameover = action.payload
    },
    InputMinute: (state, action) => {
      state.Minute = action.payload
    },
    InputSeconds: (state, action) => {
      state.Seconds = action.payload
    }
  }
})
export const { InputGameoverauth, InputAuth, InputMinute, InputSeconds } = InputSlice.actions
export default InputSlice.reducer