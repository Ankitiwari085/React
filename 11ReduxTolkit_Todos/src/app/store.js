import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice.js'; // ✅ correct

export const store=configureStore({
    reducer:todoReducer
}) 