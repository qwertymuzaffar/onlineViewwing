import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {MicroloansComponent} from './microloans.component';
import {MoreDetailsMicroloansComponent} from './more-details-microloans/more-details-microloans.component';

const microloansRoutes: Routes = [
  {path: '', component: MicroloansComponent}
];

@NgModule({
  declarations: [
    MicroloansComponent,
    MoreDetailsMicroloansComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(microloansRoutes)
  ]
})
export class MicroloansModule { }
