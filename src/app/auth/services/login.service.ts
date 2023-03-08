/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { LoadingSpinnerDialogService } from '@layout/services/loading-spinner-dialog.service';
import { BehaviorSubject, finalize, map, Observable, tap } from 'rxjs';
import { HttpClienUserLogintResponse, LoginModelRequest, LoginModelResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpService {
  public isLoginAsync$ = new BehaviorSubject<boolean>(false);

  public constructor(
    protected override http: HttpClient
  ) {
    super(http);
  }

  public userLogin(data: LoginModelRequest): Observable<LoginModelResponse> {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('grant_type', 'password');
    const headers = {
      'Authorization': 'Basic SUQ6SlBDX09BVVRI',
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post<LoginModelResponse>(ApiPath.LOGIN, body.toString(), { headers });
  }

  public getDetailUserLogin(): Observable<HttpClienUserLogintResponse> {
    return this.get(ApiPath.USER_LOGIN).pipe(
      map((response: HttpClienUserLogintResponse) => response)
    ) as Observable<HttpClienUserLogintResponse>;
  }
}
