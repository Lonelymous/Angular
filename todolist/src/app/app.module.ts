import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoeditorComponent } from './components/todoeditor/todoeditor.component';
import { ButtonModule, CheckboxModule, InputTextModule } from 'codefoxui';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent,
    TodoeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
