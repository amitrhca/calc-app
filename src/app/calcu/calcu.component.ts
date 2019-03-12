import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent implements OnInit {
  displayResult = '0';
  result = '';
  isPrevResult = false;
  constructor() { }

  ngOnInit() {
  }

  enterNumber(num: number) {
    if (this.displayResult !== '0') {
      this.displayResult = this.displayResult.toString() + num.toString();
    } else {
      this.displayResult = num.toString();
    }
  }

  clear() {
    this.displayResult = '0';
    this.result = '';
    this.isPrevResult = false;
  }

  doOperation(op: string) {
    if(this.isPrevResult){
      this.result = '';
    }
    if (this.displayResult !== '0') {
      this.result = this.result + this.displayResult + op;
      this.displayResult = '0';
      this.isPrevResult = false;
    }
  }

  equal() {
    if(this.isPrevResult){
      this.result = '';
    }
    this.result = this.result + this.displayResult;
    this.displayResult = eval(this.result);
    this.result = this.displayResult;
    this.isPrevResult = true;
  }


}
