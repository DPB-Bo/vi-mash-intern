import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataApiModel } from '@common/models/dialog-seach/dialog-seach.model';
import { ApiPath } from '@core/config/api-path';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DialogSeachService {
  public constructor(
    private http: HttpClient
  ) {
  }
  public getDataDialogCommon(data: string): Observable<DataApiModel> {
    return this.http.post<DataApiModel>(ApiPath.GET_DATA_DIALOG_COMMON, data);
  }
}
