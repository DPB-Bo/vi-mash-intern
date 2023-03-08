/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RolesModel } from '@common/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

    if (route.data?.['roles'].filter((x:string) => x === userLogin.roles[0].role).length < 1) {
      if (userLogin.roles[0].role === RolesModel.SYSTEM) {
        // this.router.navigate(['system/company']);
      } else if (userLogin.roles[0].role === RolesModel.ADMIN) {
        // this.router.navigate(['dashboard/home']);
      } else {
        // this.router.navigate(['dashboard/home']);
      }

      return false;
    }

    return true;
  }

}
