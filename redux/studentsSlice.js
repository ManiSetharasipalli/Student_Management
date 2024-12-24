import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching all students
// Handles GET request to /api/students
export const fetchStudents = createAsyncThunk(
    'students/fetchStudents', 
    async () => {
        const response = await axios.get('api/students');
        return response.data.data;
    }
);

// Async thunk for adding a new student
// Handles POST request to /api/students
export const addStudent = createAsyncThunk(
    'students/addStudent',
    async (student) => {
        const response = await axios.post('api/students', student);
        return response.data.data;
    }
);

// Initial state shape for the students slice
const initialState = {
    data: [],          // Array of student objects
    status: 'idle',    // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,       // Error message if any
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    // Handle async action lifecycle states
    extraReducers: (builder) => {
        builder
            // Handle fetchStudents states
            .addCase(fetchStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handle addStudent success
            .addCase(addStudent.fulfilled, (state, action) => {
                state.data.push(action.payload);
            });
    },
});

export default studentSlice.reducer;