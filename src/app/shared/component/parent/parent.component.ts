import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  primitiveData: string = "Number"
  nonPrimitiveData: Array<string> = ["Object 1","Object 2","Object 3"]
  

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  updatePrimitiveData(inputval: HTMLInputElement) {
    this.primitiveData = inputval.value;
  }


  addItem(){
    this.nonPrimitiveData = [...this.nonPrimitiveData, `Object ${this.nonPrimitiveData.length+1}`];
  }

}
