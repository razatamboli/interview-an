import { Component, OnInit } from '@angular/core';
import { FormTableService } from '../../services/form-table.service';
import { Itodo } from '../../consts/todo.interface';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [FormTableService]
})
export class TableListComponent implements OnInit {
  todoArr !: Array<Itodo>;

  constructor(private _service : FormTableService) { }

  ngOnInit(): void {
    this.todoArr = this._service.fetchAllTodo();
  }



}
