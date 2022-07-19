import React, { BaseSyntheticEvent, FC, useContext } from 'react';
import { uuid } from '../../../utils';
import { Text } from '../../../components/text';
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/form/TextArea';
import { Input } from '../../../components/form/Input';
import styled from 'styled-components';

const AddTaskContainer = styled.div`
  padding: 0.5rem;
`
const AddTaskButtonContainer = styled.div`
  margin-top: 8px;
  text-align: right;
  & button:last-child{
    margin-left: 0.5rem
  }
`

interface AddTaskType {
  onCancel(): void;
  onAddTask(value: any): void
}

export const AddTask: FC<AddTaskType> = ({onCancel, onAddTask}) => {
  const [data, setData] = React.useState({name: '', description: ''});

  const handleOnAccept = () => {
    onAddTask({
      ...data,
      id: uuid(),
      completed: false,
      steps: []
    });
    setData({name: '', description: ''})
  };

  return (
    <AddTaskContainer>
      <Text bold>Nueva Tarea</Text>
      <Input
        placeholder={'Nueva Tarea'}
        value={data.name}
        onChange={(event: BaseSyntheticEvent) => { setData({...data, name: event.target.value}) }}
      />
      <TextArea
        placeholder={'descripción nueva tarea'}
        value={data.description}
        onChange={(value) => setData({...data, description: value})}
      />
      <AddTaskButtonContainer>
        <Button
          danger
          onClick={onCancel}
        >Cancelar</Button>
        <Button
          onClick={handleOnAccept}
        >Aceptar</Button>
      </AddTaskButtonContainer>
    </AddTaskContainer>
  )
}