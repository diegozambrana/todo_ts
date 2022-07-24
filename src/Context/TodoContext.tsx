import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { StepType } from '../types/Step';
import { TaskType } from '../types/Task';
/* eslint-disable */
interface AppContextInterface {
  todoData?: TaskType[];
  [key: string]: any;
}

export const TodoContext = React.createContext<AppContextInterface>({
  todoData: [],
});

export const ToDoProvider = (props: any) => {
  const { item: todoData, saveItem: setTodoData } = useLocalStorage(
    'TODO_REACT_TS',
    [],
  );

  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState(false);

  const addTask = (task: TaskType) => {
    setTodoData([...todoData, task]);
    setIsModalAddTaskOpen(false);
  };

  const removeTask = (idTask: string) => {
    const newTodoData = todoData.filter((task: TaskType) => task.id !== idTask);
    setTodoData(newTodoData);
  };

  const onCheckTask = (idTask: string) => {
    const newTodoData = todoData.map((task: TaskType) =>
      task.id === idTask ? { ...task, completed: !task.completed } : task,
    );
    setTodoData(newTodoData);
  };

  const onCheckStep = (idTask: string, idStep: string) => {
    const newTodoData = todoData.map((task: TaskType) =>
      task.id === idTask
        ? {
            ...task,
            steps: task.steps.map((step: StepType) =>
              step.id === idStep
                ? { ...step, completed: !step.completed }
                : step,
            ),
          }
        : task,
    );
    setTodoData(newTodoData);
  };

  const onAddStep = (idTask: string, newStep: StepType) => {
    const newTodoData = todoData.map((task: TaskType) => {
      if (task.id === idTask) {
        task.steps.push(newStep);
        return task;
      }
      return task;
    });
    setTodoData(newTodoData);
  };

  return (
    <TodoContext.Provider
      value={{
        todoData,
        addTask,
        removeTask,
        onCheckTask,
        onCheckStep,
        onAddStep,
        isModalAddTaskOpen,
        setIsModalAddTaskOpen,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
