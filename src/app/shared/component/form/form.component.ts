import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormTableService } from '../../services/form-table.service';
import { Itodo } from '../../consts/todo.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  todoForm !: FormGroup;
  todoArr !: Array<Itodo>;

  constructor(private _service : FormTableService) { }

  ngOnInit(): void {
    this.createform();
    this.todoArr = this._service.fetchAllTodo();
  }

  createform(){
    this.todoForm = new FormGroup({
      todoitem : new FormControl(null, [Validators.required])
    })
  }

  onSumbitform(){
    if(this.todoForm.valid){
      let value = this.todoForm.value;
      this.todoArr.push(value);
      this.todoForm.reset();
    }
  }

}
