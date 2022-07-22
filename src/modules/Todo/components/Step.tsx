import { FC, useContext } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../utils/theme';
import { StepType } from '../../../types/Step';
import { Text } from '../../../components/text';
import { TodoContext } from '../../../Context/TodoContext';

const StepContainer = styled.div`
  background-color: ${COLOR.light};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
`;

type StepProp = {
  step: StepType;
  taskId: string;
};

export const Step: FC<StepProp> = ({ step, taskId }) => {
  const { onCheckStep } = useContext(TodoContext);

  return (
    <StepContainer>
      <Text style={{ flex: 1 }}>{step.name}</Text>
      <input
        type="checkbox"
        checked={step.completed}
        onChange={() => onCheckStep(taskId, step.id)}
      />
    </StepContainer>
  );
};
