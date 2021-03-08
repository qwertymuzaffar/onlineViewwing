import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  myForm = new FormGroup({
    sum: new FormControl(),
    percent: new FormControl(),
    term: new FormControl()
  });

  originalAmount = 0;
  calculatedInterest = 0;
  calculatedPayments = 0;
  calculatedPercent = 0;

  constructor() { }

  ngOnInit() {}

  calculateResults() {
    const sum = Number(this.myForm.value.sum);
    const percent = Number(this.myForm.value.percent) / 100 / 12;
    const term = Number(this.myForm.value.term);

    if (!sum || !percent || !term) {
      return;
    }

    const x = Math.pow(1 + percent, term);
    const monthly = (sum * x * percent) / (x - 1);

    if (isFinite(monthly)) {
      this.originalAmount = sum;
      this.calculatedInterest = +((monthly * term) - sum).toFixed(2);
      this.calculatedPayments = +monthly.toFixed(2);
      this.calculatedPercent = +(this.calculatedInterest / 100).toFixed(2);
    }
  }

  reset() {
    this.originalAmount = 0;
    this.calculatedInterest = 0;
    this.calculatedPayments = 0;
    this.calculatedPercent = 0;
    this.myForm.controls.sum.setValue('');
    this.myForm.controls.percent.setValue('');
    this.myForm.controls.term.setValue('');
  }

}
