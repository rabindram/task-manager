import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "task",
  initialState: [
    
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.taskName !== action.payload.taskName);
    }
  },
});

export const taskActions = TaskSlice.actions;
export default TaskSlice;
