import { Component, OnInit } from '@angular/core';
import { CfDialogService, confirmAccept } from 'codefoxui';
import { TodoItem } from 'src/app/interfaces/interfaces';
import { LocalApiService } from 'src/app/services/local.api.service';
import { TodoeditorComponent } from '../todoeditor/todoeditor.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList: TodoItem[] = [];

  constructor(
    private localApiService: LocalApiService,
    private dialogService: CfDialogService
  ) { }

  getTodoList():void {
    this.localApiService.GetTodoList().subscribe(
      ({todoList}) => {
        this.todoList = todoList;
      });
  }

  deleteTodoItem(TodoId: number): void {
    confirmAccept(this.dialogService, "Törlés","Akarod?","Igen","Nem").then(() => {
      this.localApiService.DeleteTodoItem(TodoId).subscribe(() => {
        this.getTodoList();
      });
    });
  }

  openTodoEditor(todoId: number | null = null):void {
    this.dialogService.open(TodoeditorComponent, {
      data: {
        todoId
      }
    }).onClose.subscribe((result: boolean) => {
      if (result) {
          this.getTodoList();
      }
    });
  }

  ngOnInit(): void {
    this.getTodoList();
  }

}
