/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpClientResponse } from '@core/models';
import { HttpService } from '@core/services';
import { environment } from '@env/environment';
import { LoadingSpinnerDialogService } from '@layout/services/loading-spinner-dialog.service';
import { tap, map, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService extends HttpService {
  public constructor(
    protected override http: HttpClient,
    private loadingDialog: LoadingSpinnerDialogService
  ) {
    super(http);
  }

  public forgotPassrod(mail: string): Observable<HttpClientResponse> {
    this.loadingDialog.showSpinner(true);

    return this.post(ApiPath.FORGOT_PASSWORD, { mail: mail, urlRedirect: environment.HOME_PAGE }).pipe(
      map((response: HttpClientResponse) => response),
      finalize(() => this.loadingDialog.showSpinner(false))
    ) as Observable<HttpClientResponse>;
  }
}
