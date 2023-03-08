import { Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { BreadcrumbService } from '@common/services/breadcrumb.service';
import { GroupSearchService } from '@common/services/group-search.service';
import { Utils } from '@common/utils/utils';
import { LanguageService } from '@core/services';
import { ActionSearchModel, ButtonActionModel, ButtonConfig, DailyProcessDetail, IConfigSearch, SelectSearchModel } from '../../models';
import { DialogSeachApiComponent } from '../dialog-seach-api/dialog-search-api.component';
import { DialogSearchComponent } from '../dialog-seach/dialog-seach.component';
import { clone, isNull, isUndefined } from 'lodash';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.scss']
})
export class GroupSearchComponent implements OnChanges, OnDestroy {
  // #region Decorator
  @Input() public searchConfig!: IConfigSearch;
  @Input() public btnConfig!: ButtonConfig;
  @Output() public value: EventEmitter<any> = new EventEmitter<any>();
  @Output() public btnSearchClicked: EventEmitter<ActionSearchModel> = new EventEmitter<ActionSearchModel>();
  @Output() public btnsHeaderClk: EventEmitter<ButtonActionModel> = new EventEmitter<any>();
  @Output() public btnBtnClearClk: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public selectChange: EventEmitter<SelectSearchModel> = new EventEmitter<SelectSearchModel>();
  @Output() public panelOpenStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  // #endregion
  public panelOpenState = true;
  public searchGroup: FormGroup = new FormGroup({});

  public icon: string = 'keyboard_arrow_up';
  public parentName: string = '';
  public inline: boolean = false;
  public titleHeader: string = '';
  public utils = Utils;
  public dataSearchInit:any = {};
  public minDate: Date | null = null;
  public maxDate: Date | null = null;
  public now: Date | null = null;
  public setinterval: any;
  public constructor(
    private dialog: MatDialog,
    public breadcrumbService: BreadcrumbService,
    private elemenRef: ElementRef,
    public languageService: LanguageService,
    public groupSearchService: GroupSearchService
  ) {

    this.parentName = this.breadcrumbService.getParentNameForBreadcrumb();

    this.titleHeader = this.utils.convertDateFormat(new Date(), 'YYYYMMDD', '/');
    this.getBussinessDate();
    this.setinterval = setInterval(() => {
      this.getBussinessDate();
    }, 60000);
  }

  public getBussinessDate(): void {
    this.groupSearchService.getBussinessDate().subscribe((res: DailyProcessDetail | HttpErrorResponse) => {
      if ((res as HttpErrorResponse).status && (res as HttpErrorResponse).status !== 200) {
      } else {

        const data = res as DailyProcessDetail;


        this.titleHeader = data.data.businessDate ? this.utils.convertDateFormat(new Date(data.data.businessDate), 'YYYYMMDD', '/') : '';
        this.now = data.data.businessDate ? new Date(data.data.businessDate) : null;
        localStorage.removeItem('businessDate');
        localStorage.setItem('businessDate', this.titleHeader);

        this.value.emit(this.titleHeader);
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['btnConfig'].currentValue) {
      this.panelOpenState = changes['btnConfig'].currentValue.btnSearchDefaultState;
      this.minDate = new Date(999, 11, 31);
      this.maxDate = new Date(2999, 11, 31);
    }

    if (changes['searchConfig'].currentValue) {

      const group: any = {};
      let widthRow = 0;

      this.dataSearchInit = clone({});

      this.searchConfig.config.map((el) => {

        this.dataSearchInit[el.id] =  !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? el.defaultValue : null;

        if (el.type.includes('input-from-to')) {
          group[`${el.id}From`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkFromValue(`${el.id}To`)])
          : new FormControl(null, [this.utils.checkFromValue(`${el.id}To`)]);
          group[`${el.id}To`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkToValue(`${el.id}From`)])
          : new FormControl(null, [this.utils.checkToValue(`${el.id}From`)]);
          widthRow += (el.width || 0);
        } else if (el.type.includes('date-from-to')) {
          group[`${el.id}From`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkFromDate(`${el.id}To`)])
          : new FormControl(null, [this.utils.checkFromDate(`${el.id}To`)]);
          group[`${el.id}To`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkToDate(`${el.id}From`)])
          : new FormControl(null, [this.utils.checkToDate(`${el.id}From`)]);
          widthRow += (el.width || 0);
        } else
          if (el.type.includes('select-from-to')) {
            group[`${el.id}From`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkFromValue(`${el.id}To`)])
            : new FormControl('', [this.utils.checkFromValue(`${el.id}To`)]);
            group[`${el.id}To`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkToValue(`${el.id}From`)])
            : new FormControl('', [this.utils.checkToValue(`${el.id}From`)]);
            widthRow += (el.width || 0);
          } else
            if (el.type.includes('input-number-from-to')) {
              group[`${el.id}From`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkFromValue(`${el.id}To`)])
              : new FormControl('', [this.utils.checkFromValue(`${el.id}To`)]);
              group[`${el.id}To`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, [this.utils.checkToValue(`${el.id}From`)])
              : new FormControl('', [this.utils.checkToValue(`${el.id}From`)]);
              widthRow += (el.width || 0);
            } else
              if (el.type === 'select') {
                group[el.id] = el.defaultValue ? new FormControl(el.defaultValue, []) : new FormControl('', []);
              }else
              if (el.type === 'select-year') {
                group[el.id] = el.defaultValue ? new FormControl(el.defaultValue, []) : new FormControl('', []);
              }
              else if (el.type.includes('input-text')) {
                group[`${el.id}`] = (!isNull(el.defaultValue) || !isUndefined(el.defaultValue))
                 ? new FormControl(el.defaultValue, isNull(el.validtorType) || isUndefined(el.validtorType)
                  ? null : [this.utils.validHalfSize]) : new FormControl(null, isNull(el.validtorType)  || isUndefined(el.validtorType) ? null : [this.utils.validHalfSize]);
                widthRow += (el.width || 0);
              } else if (el.type.includes('radio')) {
                group[`${el.id}`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, []) : new FormControl('0', []);
                widthRow += (el.width || 0);
              } else if (el.type.includes('dates-from-to-validate')) {
                group[`${el.id}From`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(
                  el.defaultValue, [Validators.required, this.utils.checkFromDate(`${el.id}To`)]) : new FormControl(null, [Validators.required, this.utils.checkFromDate(`${el.id}To`)]);
                group[`${el.id}To`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(
                  el.defaultValue, [Validators.required, this.utils.checkToDate(`${el.id}From`)]) : new FormControl(null, [Validators.required, this.utils.checkToDate(`${el.id}From`)]);
                widthRow += (el.width || 0);
              } else
                if (el.type.includes('selected-from-to-validate')) {
                  group[`${el.id}From`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(
                    el.defaultValue, [Validators.required, this.utils.checkFromValue(`${el.id}To`)]) : new FormControl('', [Validators.required, this.utils.checkFromValue(`${el.id}To`)]);
                  group[`${el.id}To`] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(
                    el.defaultValue, [Validators.required, this.utils.checkToValue(`${el.id}From`)]) : new FormControl('', [Validators.required, this.utils.checkToValue(`${el.id}From`)]);
                  widthRow += (el.width || 0);
                }
                else {
                  group[el.id] = !isNull(el.defaultValue) || !isUndefined(el.defaultValue) ? new FormControl(el.defaultValue, []) : new FormControl(null, []);
                }

        widthRow += (el.width || 0);
      });
      this.searchGroup = new FormGroup(group);
      const containerWidth = (this.elemenRef.nativeElement as HTMLDivElement).offsetWidth - 241;

      if (widthRow < containerWidth) this.inline = true;
    }
  }

  public onBtnSearchClk(): void {
    this.btnSearchClicked.emit({ action: 'search', form: this.searchGroup });
  }

  public checkValidateDateFrom(event: any): void {
    this.searchConfig.config.map((el) => {
      if (el.type.includes('dates-from-to-validate')) {
        if (event.target.value < Utils.convertDateFormat(new Date(this.now ? this.now : ''), 'YYYYMMDD') && event.target.value) {
          this.searchGroup.get(`${el.id}From`)?.setErrors({ errorEnterPastDate: true });
        }
      }
    });
  }

  public checkValidateDateTo(event: any): void {
    this.searchConfig.config.map((el) => {
      if (el.type.includes('dates-from-to-validate')) {
        if (event.target.value < Utils.convertDateFormat(new Date(this.now ? this.now : ''), 'YYYYMMDD') && event.target.value) {
          this.searchGroup.get(`${el.id}To`)?.setErrors({ errorEnterPastDate: true });
        }
      }
    });
  }

  public onBtnClearClk(): void {
    this.searchGroup.reset(this.dataSearchInit);

    // reset select input and radio button
    this.searchConfig.config.map((el) => {
      if (el.type === 'radio' && el.defaultValue) {
        this.searchGroup.controls[el.id]?.setValue(el.defaultValue);
      } else if (el.type === 'select-from-to' || el.type === 'input-number-from-to') {
        this.searchGroup.controls[el.id + 'From']?.setValue('');
        this.searchGroup.controls[el.id + 'To']?.setValue('');
      }
    });
    this.btnSearchClicked.emit({ action: 'reset', form: this.searchGroup });
  }

  public handleExpansion(): void {
    this.panelOpenState = !this.panelOpenState;

    if (this.panelOpenState) {
      this.icon = 'keyboard_arrow_up';
    } else {
      this.icon = 'search';
    }

    this.panelOpenStateChange.emit(this.panelOpenState);
  }

  public onBtnAddClick(): void {
    this.btnsHeaderClk.emit({ action: 'add' });
  }

  public onBtnExportClick(): void {
  }

  public focusOut(field: string, data: any): void {
    this.value.emit({ field, data });
  }

  public handleGetDataDialog(data: any, id: string): void {
    if (!data.dataDialogSearch) return;

    if (data.isDialogApi) {
      let dialog = this.dialog.open(DialogSeachApiComponent, {
        data: data?.dataDialogSearch,
        width: data?.dataDialogSearch.width,
        height: data?.dataDialogSearch.height
      });

      dialog.afterClosed().subscribe((x: any) => {
        this.searchGroup.get(id)?.setValue(x[data.dataDialogSearch.columReturn]);
      });
    } else {

      let dialog = this.dialog.open(DialogSearchComponent, {
        data: data?.dataDialogSearch,
        width: data?.dataDialogSearch.width,
        height: data?.dataDialogSearch.height
      });

      dialog.afterClosed().subscribe((x: Map<string, string>) => {
        if (x) {
          this.searchGroup.get(id)?.setValue(x.get(data.dataDialogSearch.columReturn));
        }
      });
    }
  }

  public handelSelectChange(event: MatSelectChange, formcontrolName: string): void {
    let selectSeachData: SelectSearchModel = {
      fromControlName: formcontrolName,
      value: event.value
    };

    this.selectChange.emit(selectSeachData);
  }

  public ngOnDestroy(): void {

    if (this.setinterval) {
      clearInterval(this.setinterval);
    }
  }

}
