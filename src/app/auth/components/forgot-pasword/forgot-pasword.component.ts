import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from '@auth/services/forgot-password.service';
import { Utils } from '@common/utils/utils';
import { HttpClientResponse } from '@core/models/http-response.model';
import { LanguageService } from '@core/services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forgot-pasword',
  templateUrl: './forgot-pasword.component.html',
  styleUrls: ['./forgot-pasword.component.scss']
})
export class ForgotPaswordComponent implements OnInit {
  public showConfirmPassword: boolean = false;
  public showNewPassword: boolean = false;
  public invalidEmail: boolean = false;;
  public forgotPasswordByEmailForm: FormGroup = new FormGroup({});
  public utils = Utils;

  public constructor(
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService,
    private router: Router,
    private toast: ToastrService,
    private languageService: LanguageService
  ) { }

  public ngOnInit(): void {
    this.initialForm();
  }
  private initialForm(): void {
    this.forgotPasswordByEmailForm = this.fb.group({
      email: new FormControl(null, [Validators.required, this.checkMail])
    });
  }

  public checkMail(control: AbstractControl): null | object {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^([a-z0-9A-Z](\.?[a-z0-9A-Z]){1,})\@\w+([\.-]?\w+)(\.\w{2,3})+$/)) return { 'invalidMail': true };

    return null;
  }


  public toggleNewPassWord(): void {
    this.showNewPassword = !this.showNewPassword;
  }
  public toggleConfirmPassWord(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  public submitFormByEmail(): void {
    this.forgotPasswordService.forgotPassrod(this.forgotPasswordByEmailForm.get('email')?.value).subscribe((res: HttpClientResponse) => {
      if (res.meta.code === 'BKE00019') {
        this.forgotPasswordByEmailForm.get('email')?.setErrors({ emailNotExisted: true });
      } else {
        this.toast.success(this.languageService.get('common.message.email-sent-success'));
        this.router.navigate(['auth/login']);
      }
    });
  }
}
