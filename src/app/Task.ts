//an interface, like a class, but less complex
//only defines how the Task object should look like

export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}