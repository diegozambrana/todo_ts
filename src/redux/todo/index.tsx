import { createSlice } from '@reduxjs/toolkit';
import { TaskType } from '../../types/Task';
import { getItem, saveItem } from '../../utils/localStorage';

const ITEM_NAME = 'TODO_TS_REDUX'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoData: getItem(ITEM_NAME, []),
    isModalAddTaskOpen: false,
  },
  reducers: {
    addTask: (state: any, action: any) => {
      state.todoData =  [...state.todoData, action.payload];
      state.isModalAddTaskOpen = false;
      saveItem(ITEM_NAME, state.todoData);
    },
    removeTask: (state: any, action: any) => {
      const {idTask} = action.payload
      state.todoData = state.todoData.filter(((task: TaskType) => task.id !== idTask))
      saveItem(ITEM_NAME, state.todoData);
    },
    onCheckTask: (state: any, action: any) => {
      const {idTask} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => task.id === idTask
        ? {... task, completed: !task.completed}
        : task
      )
      saveItem(ITEM_NAME, state.todoData);
    },
    onCheckStep: (state: any, action: any) => {},
    onAddStep: (state: any, action: any) => {
      const {idTask, newStep} = action.payload;
      state.todoData = state.todoData.map((task: TaskType) => {
        if(task.id === idTask){
          task.steps.push(newStep)
          return task
        }
        return task
      })
      saveItem(ITEM_NAME, state.todoData);
    },
    setIsModalAddTaskOpen: (state: any, action: any) => {
      state.isModalAddTaskOpen = action.payload;
    },
  },
});

export const { addTask, setIsModalAddTaskOpen, removeTask, onCheckTask, onAddStep } = todoSlice.actions;
export default todoSlice.reducer;