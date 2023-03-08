import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RolesModel } from '@common/models';
import { MENU_DATA, MENU_DATA_SYSTEM } from '@core/config';
import { ISideMenuNode } from '@layout/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public constructor(private router: Router) {
  }

  public getParentNameForBreadcrumb(): string {
    let getParent: ISideMenuNode[] = [];
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');
    let a  = MENU_DATA_SYSTEM;
    let b = a.filter((x) => this.router.url.includes(x.router || ''));

    if (userLogin && userLogin.roles[0].role === RolesModel.SYSTEM) {
      getParent = MENU_DATA_SYSTEM.filter((x) => this.router.url);
    } else {
      getParent = MENU_DATA.filter((x) => this.router.url.includes(x.router || ''));
    }


    if (getParent.length > 0) {
      return getParent[0].name;
    }

    return '';
  }
}
