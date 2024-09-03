import { Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() data!: string;
  @Input() nonPrimitive!: Array<string>;

  increament : number = 0;
  isDataGet : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateChildData() {
    this.increament += 1
    this.isDataGet = true;
  }

  dataupdated(){
    this.increament -= 1
    this.isDataGet = false;
  }

}
