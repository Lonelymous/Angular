import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList: TodoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
