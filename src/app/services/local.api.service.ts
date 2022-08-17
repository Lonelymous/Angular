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
        return this.apiService.get("todos")
    }

    constructor(private apiService: ApiService) {
        this.apiService.apiBaseUrl = "http://localhost:7777";
    }
}