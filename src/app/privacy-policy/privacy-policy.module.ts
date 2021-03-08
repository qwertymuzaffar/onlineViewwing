import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {PrivacyPolicyComponent} from './privacy-policy.component';

const privacyPolicyRoutes: Routes = [
  {path: '', component: PrivacyPolicyComponent}
];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(privacyPolicyRoutes)
  ]
})
export class PrivacyPolicyModule { }
