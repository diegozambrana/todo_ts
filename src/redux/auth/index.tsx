import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { activeUser: false },
  reducers: {
    setActiveUser: (state: any, action: any) => {
      state.activeUser = action.payload;
    },
  },
});

export const { setActiveUser } = authSlice.actions;
export default authSlice.reducer;
