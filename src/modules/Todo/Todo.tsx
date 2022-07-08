import React, { useState } from "react";
import { Container } from "../../components/Layout/Container";
import { Title } from "../../components/text";
import { TODO_DATA } from "../../data/data";
import { Task } from "./components/Task";

export const Todo: React.FC = () => {
  const [todo, setTodo] = useState(TODO_DATA);
  return (
    <Container>
      <Title>Todo.tsx</Title>
      {todo.map((task: any) => (
        <Task
          task={task}
          key={task.id}
          onClickTaskCompleted={(value) => {console.log(`on Task Completed`, value)}}
          onClickStepCompleted={(value) => {console.log(`on Step Completed`, value)}}
        />
      ))}
    </Container>
  )
}