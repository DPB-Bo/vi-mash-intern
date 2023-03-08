import { Component, OnInit } from '@angular/core';
import { LoginService } from '@auth/services/login.service';
import { IconService } from './core/services/icon/icon.service';
import { LocalizationService } from './core/services/localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'FE';
  public constructor(
    private icon: IconService,
    private localizationService: LocalizationService,
    public loginService: LoginService
  ) { }

  public ngOnInit(): void {
    this.icon.init();
    this.localizationService.init();
  }
}
