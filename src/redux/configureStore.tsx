import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo';
import authSlice from './auth';

const store = configureStore({
    reducer: {
        todo: todoSlice,
        auth: authSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;