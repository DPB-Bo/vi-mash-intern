import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DailyProcessDetail } from '@common/models';
import { ApiPath } from '@core/config';
import { HttpService } from '@core/services';
import { LoadingSpinnerDialogService } from '@layout/services';
import { Observable, map, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupSearchService extends HttpService  {

  public constructor(
    protected override http: HttpClient,
    private loadingDialog: LoadingSpinnerDialogService
  ) {
    super(http);
  }

  public getBussinessDate(): Observable<DailyProcessDetail | HttpErrorResponse> {

    return this.get(`${ApiPath.BUSINESS_DATE}`).pipe(
      map((response: DailyProcessDetail) => response)
    ) as Observable<DailyProcessDetail | HttpErrorResponse>;
  }

}
