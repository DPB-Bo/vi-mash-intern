import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from '@auth/services/login.service';
import { RolesModel } from '@common/models';
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { MENU_DATA, MENU_DATA_SYSTEM } from '@core/config';
import { ISideMenuNode } from '@layout/models/menu.model';
import { UserDetailModel, UserModelResponse } from '@layout/models/user.model';
import { CommonService } from './../../services/common.service';
import { ChangePasswordComponent } from './../change-password/change-password.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewChecked {
  public users: Array<ISideMenuNode> = [{
    id: '9',
    icon: 'icon-user',
    category: 'user-settings',
    name: 'common.menu.user-settings.name',
    order: 2,
    level: 1,
    children: [
      {
        id: '901',
        level: 2,
        icon: 'icon-key',
        category: 'user-settings',
        name: 'common.menu.user-settings.change-password',
        order: 1,
        children: []
      },
      {
        id: '902',
        level: 2,
        icon: 'icon-logout',
        category: 'user-settings',
        name: 'common.menu.user-settings.logout',
        order: 2,
        children: []
      }
    ]
  }];

  public userLogin: UserDetailModel = {
    userId: 0,
    userName: '',
    mail: '',
    phonePhone: '',
    delFlg: '',
    lockUser: null,
    roles: [{ role: RolesModel.SYSTEM }],
    companyId: 0,
    createBy: null
  };
  public url = '';
  public click = false;
  public dataMenu = MENU_DATA;
  public name = '';
  public role = '';
  public constructor(
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
    private loginService: LoginService,
    private commonService: CommonService,
    private messageDialog: DialogConfirmService,
    private router: Router
  ) {
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

    this.role = userLogin.roles[0].role === 'ADMIN' ? '管理者' : userLogin.roles[0].role === 'USER' ? '一般ユーザー' : 'システム';
    this.name = userLogin.userName;

    router.events.forEach((event) => {

      if (event instanceof NavigationEnd) {

        this.url = event.url;
      }
    });

  }

  public ngOnInit(): void {
    this.url = this.router.url;
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

    this.userLogin = userLogin as UserDetailModel;

    if (userLogin && userLogin.roles[0].role === RolesModel.SYSTEM) {
      this.dataMenu = MENU_DATA_SYSTEM;
    }

  }

  public ngAfterViewChecked(): void {
    this.cdr.detectChanges();

  }

  public onClickMenuClick(item: ISideMenuNode): void {
    if (item.name.includes('change-password')) {
      const dialog = this.matDialog.open(ChangePasswordComponent, {
        width: '520px'
      });

      dialog.afterClosed().subscribe((res) => {
        if (res) {
          this.messageDialog.customMessage('success', res);
        }
      });
    } else {
      sessionStorage.clear();
      this.commonService.logout();
      localStorage.removeItem('id_token');
      localStorage.removeItem('common_setting');
      localStorage.removeItem('user_login');
      this.loginService.isLoginAsync$.next(false);
      this.router.navigate(['auth/login']);
    }
  }

  public otherService(): void {
    this.loginService.isLoginAsync$.subscribe((value) => {
      if (value) {
        this.commonService.getCurrentUser().subscribe((res: UserModelResponse) => {
          if (res) {
            sessionStorage.setItem('current_user', JSON.stringify(res.data));
          }
        });
      }
    });
  }

  public handelForcusMenu(r: string): boolean {
    return this.url.includes(r);
  }

}
