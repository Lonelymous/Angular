export interface TodoEditor {
    text: string;
    done: boolean;
    description: string;
}

export interface TodoItem {
    todoId: number;
    text: string;
    done: boolean;
}