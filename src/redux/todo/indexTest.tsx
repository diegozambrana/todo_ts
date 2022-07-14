import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: 0 },
  reducers: {
    increment: (state: any) => { state.value += 1 },
    decrement: (state: any) => { state.value -= 1 },
    setValue: (state: any, action: any) => {
      console.log(`action`, action)
      state.value = action.payload
    },
  },
});

export const { increment, decrement, setValue } = todoSlice.actions;
export default todoSlice.reducer;