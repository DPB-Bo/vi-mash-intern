import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPaswordComponent } from './components/forgot-pasword/forgot-pasword.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  // {
  //   path: '', component: AuthComponent, children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'forgot-password', component: ForgotPaswordComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
