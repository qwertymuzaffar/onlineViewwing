import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {AgreementsComponent} from './agreements.component';

const agreementsRoutes: Routes = [
  {path: '', component: AgreementsComponent}
];

@NgModule({
  declarations: [AgreementsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(agreementsRoutes)
  ]
})
export class AgreementsModule { }
