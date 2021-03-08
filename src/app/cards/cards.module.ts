import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from './cards.component';
import {IonicModule} from '@ionic/angular';

const cardsRoutes: Routes = [
  {path: '', component: CardsComponent}
];

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(cardsRoutes)
  ]
})
export class CardsModule { }
