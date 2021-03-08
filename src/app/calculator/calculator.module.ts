import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorComponent} from './calculator.component';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';

const calculatorRoutes: Routes = [
  {path: '', component: CalculatorComponent}
];

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(calculatorRoutes),
    ReactiveFormsModule
  ]
})
export class CalculatorModule { }
