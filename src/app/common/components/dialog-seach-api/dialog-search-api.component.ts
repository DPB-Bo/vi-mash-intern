/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOptionApi, ListHeaderApi } from '@common/models/dialog-seach-api/dialog-search-api.model';
import { DialogSeachApiService } from '@common/services/dialog-search-api.service';
import { HttpClientResponse } from '@core/models';

@Component({
  selector: 'app-dialog-seach-api',
  templateUrl: './dialog-search-api.component.html',
  styleUrls: ['./dialog-search-api.component.scss']
})
export class DialogSeachApiComponent implements OnInit, AfterViewChecked {
  @ViewChild('inputSearch') inputSearch: ElementRef | undefined;
  public widthTable: number = 0;
  public dataOption: DialogOptionApi = {
    title: '',
    url: '',
    width: 0,
    height: 0,
    columReturn: '',
    listHeader: [],
    listParam: []
  };
  public dataChoosse: string = '';
  public listData: Array<any> = [];
  public dataSeach: string = '';


  public constructor(
    private dialogRef: MatDialogRef<DialogSeachApiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOptionApi,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogSeachApiService
  ) {
    this.handelSetInitData(data);
    this.dialogRef.addPanelClass('app-full-bleed-dialog');
    this.dialogRef.disableClose = true;
  }


  public handelSetInitData(data: DialogOptionApi): void {
    let option = new DialogOptionApi();

    this.dataOption = { ...option, ...data };
    const list: ListHeaderApi[] = [];

    data.listHeader.map(x => {
      const listHeader = new ListHeaderApi();
      let a = new ListHeaderApi();

      a = { ...listHeader, ...x };
      list.push(a);
    });
    this.dataOption.listHeader = JSON.parse(JSON.stringify(list));
  }

  public ngOnInit(): void {
    this.handelGetdataInit();

    //this.inputSearch?.nativeElement.focus();

  }

  public ngAfterViewChecked(): void {

    this.inputSearch?.nativeElement.focus();

    this.cdr.detectChanges();
  }




  public handelGetdataInit(): void {

    this.widthTable = this.dataOption.listHeader.reduce(
      (total, thing) => total + (thing.width && !thing.isHidden ? thing.width : 0),
      56
    );
    this.dialogService.getDataDialogCommon(this.dataOption.url, this.dataOption).subscribe((x: HttpClientResponse) => {
      if (x.data) {
        this.listData = [...x.data];
      }
    });
  }
  public handelCancel(): void {
    this.dialogRef.close();
  }

  public totalLenghSticky(j: number): number {
    let total = 56;

    this.dataOption.listHeader.map((x, index) => {
      if (index < j) {
        total += x.width && !x.isHidden ? x.width : 0;
      }
    });

    return total;
  }
  public coverObjectToString(value: any): string {
    return JSON.stringify(value);
  }

  public clickChoose(data: any): void {
    this.dataChoosse = JSON.stringify(data);
  }

  public handelSeach(): void {
    this.dialogService.getDataDialogCommon(this.dataOption.url, this.dataOption, this.dataSeach).subscribe((x: HttpClientResponse) => {
      if (x.data) {
        this.listData = [...x.data];
        this.dataChoosse = '';
      }
    });
  }

  public handelDblclick(data: any): void {
    this.dialogRef.close(JSON.parse(JSON.stringify(data)));
  }

  public handelButtonOk(): void {
    this.dialogRef.close(JSON.parse(this.dataChoosse));
  }
}
