import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Rashed Alam", email: "dev.rashedalam@gmail.com", phoneNumber: "01852346841"},
    {id: 2, name: "Jamshed Alam", email: "jamshed@gmail.com", phoneNumber: "01852346841"}
]

export const studentSlice = createSlice({
    name: "students",
    initialState: initialState,
    reducers: {
        showStudents: (state => state),
        deleteStudent: ((state, action) => state = state.filter(item => item.id !== action.payload)
        )
    }
})

export const {showStudents, deleteStudent} = studentSlice.actions

export default studentSlice.reducer