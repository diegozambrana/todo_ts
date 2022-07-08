import { StepType } from "./Step";

export interface TaskType {
    id: string;
    name: string;
    description: string;
    completed: boolean;
    steps: StepType[];
}