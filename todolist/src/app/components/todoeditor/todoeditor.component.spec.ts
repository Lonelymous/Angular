import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoeditorComponent } from './todoeditor.component';

describe('TodoeditorComponent', () => {
  let component: TodoeditorComponent;
  let fixture: ComponentFixture<TodoeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
