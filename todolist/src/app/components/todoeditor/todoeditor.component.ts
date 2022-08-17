import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CfDialogConfig, CfDialogRef } from 'codefoxui';
import { TodoEditor } from 'src/app/interfaces/interfaces';
import { LocalApiService } from 'src/app/services/local.api.service';

@Component({
  selector: 'app-todoeditor',
  templateUrl: './todoeditor.component.html',
  styleUrls: ['./todoeditor.component.scss']
})
export class TodoeditorComponent implements OnInit {

  todoId: number | null = null;

  formGroup: FormGroup = new FormGroup(
    {
      text: new FormControl(''),
      done: new FormControl(false),
      description: new FormControl('')
    }
  );

  save():void {
    const item:TodoEditor = this.formGroup.value;
    if (this.todoId === null) {
      this.localApiService.CreateTodoItem(item).subscribe(() => {
        this.close(true);
      });
    } else {
      this.localApiService.UpdateTodoItem(this.todoId, item).subscribe(() => {
        this.close(true);
      });
    }
  }

  close(result: boolean = false): void {
    this.ref.close(result);
  }

  constructor(
    private config: CfDialogConfig,
    private ref: CfDialogRef,
    private localApiService: LocalApiService
  ) {
    this.todoId = this.config.getData('todoId');
   }

  ngOnInit(): void {
    console.log(this.todoId);
    if (this.todoId !== null) {
      this.localApiService.GetTodoItem(this.todoId).subscribe(({ todoEditor }) => {
        this.formGroup.patchValue(todoEditor)
      });
    }
  }

}
