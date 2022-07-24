import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import { Box } from '../../components/Layout/Box';
import { Container } from '../../components/Layout/Container';
import { Modal } from '../../components/modal';
import { Title } from '../../components/text';
import { RootState } from '../../redux/configureStore';
import { AddTask } from './components/AddTask';
import { Task } from './components/Task';
import { addTask, setIsModalAddTaskOpen } from '../../redux/todo';
import { TaskType } from '../../types/Task';
import { useTodo } from '../../api/useTodo';

export const Todo: React.FC = () => {
  const { todoData, isModalAddTaskOpen } = useSelector(
    (s: RootState) => s.todo,
  );
  const { loading, getTodo } = useTodo();
  const dispatch = useDispatch();

  useEffect(() => {
    getTodo();
  }, []);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <Container>
      <Title>Todo.tsx</Title>
      {todoData?.map((task: any) => (
        <Task task={task} key={task.id} />
      ))}
      <Box mt={1}>
        <Button onClick={() => dispatch(setIsModalAddTaskOpen(true))}>
          Agregar Tarea
        </Button>
      </Box>
      <Modal
        isOpen={isModalAddTaskOpen}
        onClose={() => dispatch(setIsModalAddTaskOpen(false))}
      >
        <AddTask
          onCancel={() => dispatch(setIsModalAddTaskOpen(false))}
          onAddTask={(task: TaskType) => dispatch(addTask(task))}
        />
      </Modal>
    </Container>
  );
};
