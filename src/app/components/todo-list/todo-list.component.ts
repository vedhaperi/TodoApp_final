import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    private todoText: string;

    constructor(private todoService: TodoService) {
        this.todoText = '';
    }

  ngOnInit() {
    }
  private addTodo(): void {
      this.todoService.addTodo(this.todoText);
      this.todoText = '';
  }

}
