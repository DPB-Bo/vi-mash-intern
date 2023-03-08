import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '@auth/services/login.service';
import { MENU_DATA } from '@core/config';
import { ChangePasswordComponent } from '../change-password/change-password.component';

export interface DataHeader {
  parent: string;
  chilren: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public dataMenu = MENU_DATA;
  public titelHeader: string = '';
  public userName: string = '';

  public constructor(
    private loginService: LoginService,
    public dialog: MatDialog
  ) {
  }

  public btnLogOut(): void { }
  public changePassword(): void {
    let dialog = this.dialog.open(ChangePasswordComponent, {
      width: '520px'
    });
  }
}
