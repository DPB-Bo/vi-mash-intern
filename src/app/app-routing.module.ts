import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesModel } from '@common/models';
import { RoleGuard } from '@core/guards/role.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
