import { BaseSyntheticEvent, FC, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/form/Input"
import { Box } from "../../../components/Layout/Box"
import { Text } from "../../../components/text"
import { removeTask, onCheckTask, onAddStep } from "../../../redux/todo"
import { TaskType } from "../../../types/Task"
import { uuid } from "../../../utils"
import { COLOR } from "../../../utils/theme"
import { Step } from "./Step"

const AddStepContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const TaskContainer = styled.div`
  background-color: ${COLOR.light};
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 3px 8px rgb(0 0 0 / 30%);
`
const TaskWrapper = styled.div`
  display: flex;
`
const TaskArrow = styled.i`
  cursor: pointer;
  font-size: 1.2rem;
  color: ${COLOR.text};
  margin-right: 1rem;
`
const TaskDetail = styled.div`
  background-color: rgba(0,0,0,0.1);
  padding: 1rem;
  margin-top: 0.5rem;
`

type TaskProps = {
  task: TaskType,
}

export const Task: FC<TaskProps> = ({ task }) =>{
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [newStep, setNewStep] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddStep = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    dispatch(onAddStep({idTask: task.id, newStep: {
      id: uuid(),
      name: newStep,
      completed: false,
    }}));
    setNewStep('');
  }

  return (
    <TaskContainer>
      <TaskWrapper>
        <TaskArrow
          className={`fas fa-angle-${showDetails ? 'up' : 'down'}`}
          onClick={() => setShowDetails((sd: boolean) => !sd)}
        />
        <Text style={{flex: 1}}>
          {task.name}
        </Text>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(onCheckTask({idTask: task.id}))}
        />
      </TaskWrapper>
      {showDetails && (
        <TaskDetail>
          {task.steps.map((step: any) => (
            <Step
              step={step}
              key={step.id}
              taskId={task.id}
            />
          ))}
          <form onSubmit={handleAddStep}>
            <AddStepContainer>
              <div style={{flex: "1 1 0%"}}>
                <Input
                  value={newStep}
                  onChange={(event: BaseSyntheticEvent) => setNewStep(event.target.value)}
                  placeholder="Agregar nuevo paso"
                />
              </div>
              <Box ml={0.5}>
                <Button type="submit" small>Agregar Paso</Button>
              </Box>
            </AddStepContainer>
          </form>
          <div>
            <Text bold my={1}>Descripción:</Text>
            <Text mb={1}>{task.description}</Text>
            <Button
              onClick={() => dispatch(removeTask({idTask: task.id}))}
              variant="danger"
            >Eliminar</Button>
          </div>
        </TaskDetail>
      )}
    </TaskContainer>
  )
}