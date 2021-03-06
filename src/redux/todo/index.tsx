import { createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../types/Task';
import { postTodo } from '../../api/useTodo';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoData: [],
    isModalAddTaskOpen: false,
    loading: false,
  },
  reducers: {
    updateTodoData: (state: any, action: any) => {
      state.todoData = action.payload;
    },
    addTask: (state: any, action: any) => {
      state.todoData = [...state.todoData, action.payload];
      state.isModalAddTaskOpen = false;
      postTodo(state.todoData);
    },
    removeTask: (state: any, action: any) => {
      const { idTask } = action.payload;
      state.todoData = state.todoData.filter(
        (task: TaskType) => task.id !== idTask,
      );
      postTodo(state.todoData);
    },
    onCheckTask: (state: any, action: any) => {
      const { idTask } = action.payload;
      state.todoData = state.todoData.map((task: TaskType) =>
        task.id === idTask ? { ...task, completed: !task.completed } : task,
      );
      postTodo(state.todoData);
    },
    // onCheckStep: (state: any, action: any) => {},
    onAddStep: (state: any, action: any) => {
      const { idTask, newStep } = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => {
        if (task.id === idTask) {
          task.steps.push(newStep);
          return task;
        }
        return task;
      });
      postTodo(state.todoData);
    },
    setIsModalAddTaskOpen: (state: any, action: any) => {
      state.isModalAddTaskOpen = action.payload;
    },
    setLoading: (state: any, action: any) => {
      state.loading = action.payload;
    },
  },
});

export const {
  addTask,
  setIsModalAddTaskOpen,
  removeTask,
  onCheckTask,
  onAddStep,
  updateTodoData,
  setLoading,
} = todoSlice.actions;
export default todoSlice.reducer;
