import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agreements',
    loadChildren: () => import('src/app/agreements/agreements.module').then(m => m.AgreementsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'microloans',
    loadChildren: () => import('src/app/microloans/microloans.module').then(m => m.MicroloansModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('src/app/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('src/app/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('src/app/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('src/app/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: '**',
    redirectTo: '/agreements',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
