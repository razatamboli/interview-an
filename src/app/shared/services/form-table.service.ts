import { Injectable } from '@angular/core';
import { Itodo } from '../consts/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class FormTableService {
  todoArr : Array<Itodo> = [{
    todoitem : "Learn"
  },
  {
    todoitem : "Improve"
  },
  {
    todoitem : "Success"
  }
]

  constructor() { }

  fetchAllTodo() : Array<Itodo>{
    return this.todoArr as Array<Itodo>;
  }
}
