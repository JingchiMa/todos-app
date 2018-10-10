import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() { 
  	if (!localStorage.getItem("todos") || localStorage.getItem("todos").length === 2) {
	  	this.todos = [
	  		new Todo(0, "Add a new item using input bar"),
	  		new Todo(1, "Click the content to mark it as finished"),
	  		new Todo(2, "Click button to remove the item")
	  	];
	  	this.todos[1].isFinished = true;
	  	console.log(this.todos[1].isFinished);
	  	this.nextId = 3;
	  	localStorage.setItem("nextId", this.nextId);
	  	localStorage.setItem("todos", JSON.stringify(this.todos));
  	}
  	this.nextId = localStorage.getItem("nextId");
  }

  public addTodo(text: string): void {
  	if (!text) {
  		return;
  	}
  	let todo = new Todo(this.nextId, text);
  	this.todos = JSON.parse(localStorage.getItem("todos"));
  	this.todos.push(todo);
  	localStorage.setItem("todos", JSON.stringify(this.todos));
  	this.nextId++;
  }

  public getTodos(): Todo[] {
  	this.todos = JSON.parse(localStorage.getItem("todos"));
  	return this.todos;
  }

  public removeTodo(id: number): void {
  	this.todos = JSON.parse(localStorage.getItem("todos"));
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  public removeAllFinished(): void {
  	this.todos = JSON.parse(localStorage.getItem("todos"));
  	this.todos = this.todos.filter(todo => !todo.isFinished);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
