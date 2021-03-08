import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {NewsComponent} from './news.component';
import {DetailComponent} from './detail/detail.component';

const newsRoutes = [
  { path: '', component: NewsComponent },
  { path: ':id', component: DetailComponent }
];

@NgModule({
  declarations: [NewsComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoutes),
    IonicModule
  ]
})
export class NewsModule { }
