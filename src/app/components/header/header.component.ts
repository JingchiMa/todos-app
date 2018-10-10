import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  removeFinished(): void {
  	this.todoService.removeAllFinished();
  }
}
