import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonAppModule } from '@common/common.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ForgotPaswordComponent } from './components/forgot-pasword/forgot-pasword.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AuthComponent,
    ForgotPaswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CommonAppModule.forRoot()
  ]
})
export class AuthModule { }
