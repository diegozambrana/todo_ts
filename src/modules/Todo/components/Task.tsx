import { BaseSyntheticEvent, FC, useState } from "react"
import styled from "styled-components"
import { Text } from "../../../components/text"
import { TaskType } from "../../../types/Task"
import { COLOR } from "../../../utils/theme"
import { Step } from "./Step"

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
  onClickTaskCompleted(value: boolean): void,
  onClickStepCompleted(value: boolean): void,
}

export const Task: FC<TaskProps> = ({task, onClickTaskCompleted, onClickStepCompleted}) =>{
  const [showDetails, setShowDetails] = useState<boolean>(false);
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
          onChange={(e: BaseSyntheticEvent) => onClickTaskCompleted(e.target.checked)}
        />
      </TaskWrapper>
      {showDetails && (
        <TaskDetail>
          {task.steps.map((step: any) => (
            <Step
              step={step}
              key={step.id}
              onClickStepCompleted={onClickStepCompleted}
            />
          ))}
          <div>
            <Text bold my={1}>Descripción:</Text>
            <Text>{task.description}</Text>
          </div>
        </TaskDetail>
      )}
    </TaskContainer>
  )
}