import { Injectable } from "@angular/core";
import { ApiService } from "codefoxui";
import { Observable } from "rxjs";
import { TodoEditor, TodoItem } from "../interfaces/interfaces";

@Injectable({
    providedIn: 'root'
})
export class LocalApiService {

    GetTodoList(): Observable<{
        todoList: TodoItem[]
    }> {
        return this.apiService.get("todos");
    }

    CreateTodoItem(item: TodoEditor): Observable<{}> {
        return this.apiService.post("todos", item);
    }

    GetTodoItem(todoId: number): Observable<{
        todoEditor: TodoEditor
    }> {
        return this.apiService.get("todos/" + todoId.toString());
    }

    UpdateTodoItem(todoId: number, item: TodoEditor): Observable<{}> {
        return this.apiService.patch("todos/" + todoId.toString(), item);
    }

    DeleteTodoItem(todoId: number): Observable<{}> {
        return this.apiService.delete("todos/" + todoId.toString());
    }

    constructor(private apiService: ApiService) {
        this.apiService.apiBaseUrl = "http://localhost:4000";
    }
}