// Configure Redux Store
// This file serves as the central state management configuration for the application

import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from './studentsSlice';

const store = configureStore({
    reducer: {
        // Define the state slice for managing student data
        // Key 'students' will be accessible in state.students
        students: studentsReducer,
    }
});

export default store;