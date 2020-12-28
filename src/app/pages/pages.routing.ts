import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './accountsettings/accountsettings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
    { path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent, data: {Title: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {Title: 'Progress'}},
      {path: 'chart', component: Grafica1Component, data: {Title: 'Gráficas'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {Title: 'Ajustes de cuenta'}},
      {path: 'promesas', component: PromesasComponent, data: {Title: 'Promesas'}},
      {path: 'rxjs', component: RxjsComponent, data: {Title: 'RxJs'}},
      {path: 'perfil', component: ProfileComponent, data: {Title: 'Perfil de usuario'}}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
