import { CommonModule } from '@angular/common';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonAppModule } from '@common/common.module';
import { LoadingSpinnerDialogComponent } from '@layout/components/loading-spinner-dialog/loading-spinner-dialog.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthModule } from './../auth/auth.module';
import { AuthGuard } from './guards';
import { JsonTokenWebInterceptor } from './injectors';
import { LanguageService } from './services/cache/languague.service';
import { IconService } from './services/icon/icon.service';
import { LocalizationService } from './services/localization/localization.service';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    CommonAppModule.forRoot()
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('The CoreModule has been already created');
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuard,
        LocalizationService,
        LoadingSpinnerDialogComponent,
        LanguageService,
        IconService,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }).providers!,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonTokenWebInterceptor,
          multi: true
        }
      ]
    };
  }
}
