import { BaseSyntheticEvent, FC, useContext, useState } from "react"
import styled from "styled-components"
import { Button } from "../../../components/Button"
import { Input } from "../../../components/form/Input"
import { Text } from "../../../components/text"
import { TodoContext } from "../../../Context/TodoContext"
import { StepType } from "../../../types/Step"
import { TaskType } from "../../../types/Task"
import { uuid } from "../../../utils"
import { COLOR } from "../../../utils/theme"
import { Step } from "./Step"

const AddStepContainer = styled.div`
  display: flex;
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
  onClickTaskCompleted(idTask: string): void,
  onClickStepCompleted(idTask: string, idStep: string): void,
  onClickRemove(idTask: string): void,
  onAddStep(idTask: string, step: StepType): void,
}

export const Task: FC<TaskProps> = ({
  task,
  onClickTaskCompleted,
  onClickStepCompleted,
  onClickRemove,
  onAddStep,
}) =>{
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [newStep, setNewStep] = useState<string>('');
  const {counter} = useContext(TodoContext);

  const handleAddStep = () => {
    onAddStep(task.id, {
      id: uuid(),
      name: newStep,
      completed: false,
    });
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
          {task.name} {counter}
        </Text>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e: BaseSyntheticEvent) => onClickTaskCompleted(task.id)}
        />
      </TaskWrapper>
      {showDetails && (
        <TaskDetail>
          {task.steps.map((step: any) => (
            <Step
              step={step}
              key={step.id}
              onClickStepCompleted={(idStep: string) => onClickStepCompleted(task.id, idStep)}
            />
          ))}
          <AddStepContainer>
            <div style={{flex: "1 1 0%"}}>
              <Input value={newStep} onChange={(value) => setNewStep(value)} placeholder="Agregar nuevo paso"/>
            </div>
            <Button onClick={handleAddStep} small>Agregar Paso</Button>
          </AddStepContainer>
          <div>
            <Text bold my={1}>Descripción:</Text>
            <Text mb={1}>{task.description}</Text>

            <Button
              onClick={() => onClickRemove(task.id)}
              variant="danger"
            >Eliminar</Button>
          </div>
        </TaskDetail>
      )}
    </TaskContainer>
  )
}