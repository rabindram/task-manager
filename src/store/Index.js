import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";

const taskStore = configureStore({
  reducer: {
    task: TaskSlice.reducer,
  }
});

export default taskStore;