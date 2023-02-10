import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Comp1Component } from './comp1/comp1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosComponent } from './dados/dados.component';

const routes: Routes = [
  { path: '', component: Comp1Component, canActivate: [AuthGuard] },
  { path: 'comp1', component: Comp1Component, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
   {path: 'dados', component: DadosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
