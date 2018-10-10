import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
  }
  
  private removeTodo(): void {
  	this.todoService.removeTodo(this.todo.id);
  }

  private toggleStatus(): void {
    let array = JSON.parse(localStorage.getItem("todos"));
    let cur = array.find(todo => todo.id === this.todo.id);
    let idx = array.indexOf(cur);
    if (idx >= 0) {
      array[idx].isFinished = !array[idx].isFinished;
    }
    localStorage.setItem("todos", JSON.stringify(array));
  }

}
