/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@auth/services/login.service';
import { LanguageService } from '@core/services/cache/languague.service';
import { LoadingSpinnerDialogService } from '@layout/services/loading-spinner-dialog.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClientResponse } from '@core/models';


@Injectable()
export class JsonTokenWebInterceptor implements HttpInterceptor {
  public constructor(
    private dialogService: DialogConfirmService,
    private router: Router,
    private loadingDialog: LoadingSpinnerDialogService,
    private loginService: LoginService,
    private toastrService: ToastrService,
    private languageService: LanguageService
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = this.addToHeader(request);

    return next.handle(reqClone).pipe(
      catchError((reason: HttpErrorResponse) => {
        return throwError(() => reason);
      })
    );
  }

  /**
   * Method to add the Authorization token in header. Returns the new request
   */
  private addToHeader(request: HttpRequest<any>): HttpRequest<any> {
    // const token = localStorage.getItem('id_token');

    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    // }

    return request;
  }
}
