import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpClientResponse } from '@core/models';
import { HttpService } from '@core/services';
import { reasonListModel } from '@layout/models/reason.model';
import { ChangePasswordRequest, UserModelResponse } from '@layout/models/user.model';
import { finalize, map, Observable } from 'rxjs';
import { LoadingSpinnerDialogService } from './loading-spinner-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends HttpService {

  public constructor(protected override http: HttpClient,private loadingDialog : LoadingSpinnerDialogService) {
    super(http);
  }

  public getCurrentUser(): Observable<UserModelResponse> {
    return this.get(ApiPath.USER_LOGIN) as Observable<UserModelResponse>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getCommonSetting(): Observable<any> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.get(ApiPath.COMMON_SETTNG) as Observable<any>;
  }

  public changePassword(request: ChangePasswordRequest): Observable<HttpClientResponse | HttpErrorResponse> {
    return this.post(ApiPath.CHANGE_PASSWORD, request) as Observable<HttpClientResponse | HttpErrorResponse>;
  }

  public logout(): Observable<HttpClientResponse | HttpErrorResponse> {
    return this.delete(ApiPath.LOGOUT) as Observable<HttpClientResponse | HttpErrorResponse>;
  }

  public getReasonList(reason?: string): Observable<reasonListModel> {

    this.loadingDialog.showSpinner(true);

    return this.get(`${ApiPath.REASON}${reason?`?reason=${reason}`:''}`).pipe(
      map((response: reasonListModel) => response),
      finalize(() => this.loadingDialog.showSpinner(false))
    ) as Observable<reasonListModel>;
  }
}
