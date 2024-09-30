import { createContext, Dispatch, SetStateAction } from "react";

export type TaskFields = {
    taskName: string,
    taskDesc: string,
    taskDue: string,
    setTaskName: Dispatch<SetStateAction<string>>,
    setTaskDesc: Dispatch<SetStateAction<string>>,
    setTaskDue: Dispatch<SetStateAction<string>>,
};

export const TaskFormContext = createContext<TaskFields>(undefined as any);
