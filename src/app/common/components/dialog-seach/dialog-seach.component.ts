import { AfterViewChecked, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataApiModel, DialogOption, ListHeader } from '@common/models/dialog-seach/dialog-seach.model';
import { DialogSeachService } from '../../services/dialog-search-http.service';


@Component({
  selector: 'app-dialog-seach',
  templateUrl: './dialog-seach.component.html',
  styleUrls: ['./dialog-seach.component.scss']
})
export class DialogSearchComponent implements OnInit,AfterViewChecked {
  public dataOption: DialogOption = new DialogOption();
  public widthTable: number = 0;
  public query: string = '';
  public listData: Array<Array<string>> = [];
  public dataSearch: string = '';
  public dataChoosse: string = '';
  public constructor(
    private dialogRef: MatDialogRef<DialogSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOption,
    private dialogService: DialogSeachService,
    private cdr: ChangeDetectorRef
  ) {
    this.handelSetInitData(data);
    this.dialogRef.addPanelClass('app-full-bleed-dialog');
    this.dialogRef.disableClose = true;
  }

  public ngAfterViewChecked():void {
    this.cdr.detectChanges();
  }


  public handelSetInitData(data: DialogOption): void {
    let option = new DialogOption();

    this.dataOption = { ...option, ...data };
    const list: ListHeader[] = [];

    data.listHeader.map(x => {
      const listHeader = new ListHeader();
      let a = new ListHeader();

      a = { ...listHeader, ...x };
      list.push(a);
    });
    this.dataOption.listHeader = JSON.parse(JSON.stringify(list));
  }

  public ngOnInit(): void {
    this.handelGetdataInit();
  }
  public handelGetdataInit(): void {
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

    this.widthTable = this.dataOption.listHeader.reduce(
      (total, thing) => total + (thing.width && !thing.isHidden ? thing.width : 0),
      56
    );

    if (this.dataOption.listHeader.length > 0) {
      this.query = this.query + 'select ';
      this.dataOption.listHeader.map((x, index) => {
        this.query = this.query + x.nameColum;
        this.query = this.dataOption.listHeader.length - 1 === index ? this.query + ' ' : this.query + ',';
      });
      this.query = (this.query + 'from ' + this.dataOption.table) + (this.dataOption.companyId ? ' where company_id = ' + userLogin?.companyId : '');
    }

    this.query = this.query + ' and del_flg = 0';
    this.dialogService.getDataDialogCommon(this.query + ' limit ' + this.dataOption.litmit).subscribe((x: DataApiModel) => {
      if (x.data.length > 0) {
        this.listData = JSON.parse(JSON.stringify(x.data));
      }
    });
  }
  public handelCancel(): void {
    this.dialogRef.close();
  }
  public handelSeach(): void {

    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

    let searchQuery = this.query + ' and (';

    this.dataOption.listHeader.map((x, index) => {

      if(x.nameColum.indexOf('code')!== -1 || x.nameColum.indexOf('name')!== -1){
        searchQuery = searchQuery + (index === 0 ? '' : ' or ') + x.nameColum + ' like \'%' + this.dataSearch + '%\' ';
      }
    });


    searchQuery = searchQuery + ') limit ' + this.dataOption.litmit;

    this.dialogService.getDataDialogCommon(searchQuery).subscribe((x: DataApiModel) => {
      this.listData = JSON.parse(JSON.stringify(x.data));
      this.dataChoosse = '';
    });
  }
  public coverFormat(value: string, format?: string): string {
    let data: string = value;

    switch (format) {
      case 'YYYYMMDD':
        if (Date.parse(value)) {
          data = this.formatDateYyyyMmDd(value);
          break;
        }

        value = '';
        break;

      case 'YYYYMMDDHHMM':
        if (Date.parse(value)) {
          data = this.formatDateTimeYyyyMmDdHhMm(value);
          break;
        }

        value = '';
        break;

      case 'YYYYMMDDHHMMSS':
        if (Date.parse(value)) {
          data = this.formatDateTimeYyyyMmDdHhMmSs(value);
          break;
        }

        data = '';
        break;
    }

    return data;
  }

  public clickChoose(data: object): void {
    this.dataChoosse = data.toString();
  }
  public handelDblclick(): void {
    let mp = new Map();

    let data = this.dataChoosse.split(',');

    this.dataOption.listHeader.map((x, index) => {
      mp.set(x.nameColum, data[index]);
    });
    this.dialogRef.close(mp);
  }
  public coverObjectToString(value: object): string {
    return value.toString();
  }
  public handelButtonOk(): void {
    if (!this.dataChoosse || this.listData.findIndex((x) => x.toString() === this.dataChoosse) < 0) {
      return;
    }

    let data = this.dataChoosse.split(',');
    let mp = new Map();

    this.dataOption.listHeader.map((x, index) => {
      mp.set(x.nameColum, data[index]);
    });
    this.dialogRef.close(mp);
  }
  public formatDateYyyyMmDd(date: string): string {
    let d = new Date(Date.parse(date));
    let yyyy = d.getFullYear();
    let mm = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1); // getMonth() is zero-based
    let dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();

    return [yyyy, mm, dd].join('/');
  }
  public formatDateTimeYyyyMmDdHhMmSs(date: string): string {
    let d = new Date(Date.parse(date));
    let yyyy = d.getFullYear();
    let mm = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1); // getMonth() is zero-based
    let dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let hh = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    let ss = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();

    return [yyyy, mm, dd].join('/') + ' ' + [hh, min, ss].join(':');
  }
  public formatDateTimeYyyyMmDdHhMm(date: string): string {
    let d = new Date(Date.parse(date));
    let yyyy = d.getFullYear();
    let mm = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1); // getMonth() is zero-based
    let dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let hh = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();

    return [yyyy, mm, dd].join('/') + ' ' + [hh, min].join(':');
  }
  public totalLenghthSticky(j: number): number {
    let total = 56;

    this.dataOption.listHeader.map((x, index) => {
      if (index < j) {
        total += x.width && !x.isHidden ? x.width : 0;
      }
    });

    return total;
  }
}
