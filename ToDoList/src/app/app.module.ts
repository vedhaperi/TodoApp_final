import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
