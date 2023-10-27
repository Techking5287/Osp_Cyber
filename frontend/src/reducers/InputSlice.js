import { createSlice } from '@reduxjs/toolkit'
export const InputSlice = createSlice({
  name: 'input',
  initialState: {
    gameover: true,
    Auth: ''
  },
  reducers: {
    InputGameoverauth: (state, action) => {
      state.gameover = action.payload
    }
  }
})
export const { InputGameoverauth, InputAuth } = InputSlice.actions
export default InputSlice.reducer