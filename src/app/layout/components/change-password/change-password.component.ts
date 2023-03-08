import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '@auth/services/login.service';
import { Utils } from '@common/utils/utils';
import { HttpClientResponse } from '@core/models';
import { LanguageService } from '@core/services/cache/languague.service';
import { CommonService } from '@layout/services/common.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public utils = Utils;


  public constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private loginService: LoginService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private languageService: LanguageService,
    private router: Router
  ) {
    this.dialogRef.addPanelClass('change-pwd-page');
    this.dialogRef.disableClose = true;
  }
  public showCurrentPassword: boolean = false;
  public showNewPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  public changePasswordForm: FormGroup = new FormGroup({});

  public ngOnInit(): void {
    this.initialForm();
  }
  public initialForm(): void {
    this.changePasswordForm = this.fb.group({
      passwordOld: new FormControl(null, [Validators.required]),
      passwordNew: new FormControl(null, [Validators.required, this.passwordValidator()]),
      passwordConfirm: new FormControl(null, [Validators.required, this.confirmPasswordValidator()])
    });
  }
  public togglePassWord(type: string): void {
    switch (type) {

      case'old':
        this.showCurrentPassword = !this.showCurrentPassword;
        break;

      case 'new':
        this.showNewPassword = !this.showNewPassword;
        break;

      case 'confirm':
        this.showConfirmPassword = !this.showConfirmPassword;
        break;

      default:
        break;
    }
  }

  public submitForm(): void {
    this.changePasswordForm.markAllAsTouched();

    if (this.changePasswordForm.valid) {
      this.commonService.changePassword(this.changePasswordForm.value).subscribe((res: HttpClientResponse | HttpErrorResponse) => {

        if ((res as HttpErrorResponse).status && (res as HttpErrorResponse).status !== 200) {
          const response = res as HttpErrorResponse;

          if (response.error.meta.code === 'BKE00071') {
            this.changePasswordForm.get('passwordNew')?.setErrors({'passwordDuplicate':true});
          }else if(response.error.meta.code === 'BKE00070') {
            this.changePasswordForm.get('passwordOld')?.setErrors({'passwordWrong':true});
          }
        } else {
          this.dialogRef.close(false);
          this.toastr.success(this.languageService.get('common.message.password-changed-success'));
          localStorage.removeItem('id_token');
          localStorage.removeItem('user_login');
          this.loginService.isLoginAsync$.next(false);
          this.router.navigate(['auth/login']);
        }

      });
    }
  }
  public closePopup(): void {
    this.dialogRef.close(false);
  }

  public getErrorConfirmPassword(): boolean {
    return this.changePasswordForm.get('passwordConfirm')?.hasError('required') || this.changePasswordForm.getError('notMatch');
  }

  private passwordValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value === null || control.value === '') return null;

      const regexUppercase = /[A-Z]/g;
      const regexDowncase = /[a-z]/g;
      const regexNumber = /[0-9]/g;

      if (control.value.toString().length < 8 || control.value.toString().length > 20) {
        return { validPassword: { value: control.value } };
      }

      if ((control.parent?.get('passwordConfirm')?.getRawValue() !== null || control.parent?.get('passwordConfirm')?.getRawValue() !== '')
        && control.parent?.get('passwordConfirm')?.getRawValue() !== control.value) {
        control.parent?.get('passwordConfirm')?.setErrors({ notMatch: true });
      } else {
        control.parent?.get('passwordConfirm')?.setErrors(null);
      }

      return !(regexUppercase.test(control.value) && regexNumber.test(control.value) && regexDowncase.test(control.value)) ? { validPassword: { value: control.value } } : null;

    };
  };

  private confirmPasswordValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.parent?.value.passwordNew;
      const confirmPass = control.value;

      if (pass !== confirmPass) {
        return { notMatch: true };
      }

      return null;
    };
  };
}
