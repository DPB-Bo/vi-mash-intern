/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterContentChecked,
  AfterViewChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ButtonActionModel, IDisplayColumn, IRadioOption, ITableConfig, SortData } from '@common/models';
import { DataSearchModel } from '@core/models';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnChanges, AfterContentChecked, AfterViewChecked {
  // #region Decorator
  @Input() public isShowOption!: boolean;
  @Input() public tableConfig!: ITableConfig;
  @Input() public dataSource!: DataSearchModel;
  @Input() public disableSort!: boolean;
  @Input() public sortData!: SortData;
  @Output() public tableClick: EventEmitter<ButtonActionModel> = new EventEmitter<ButtonActionModel>();
  @Output() public handleSort: EventEmitter<any> = new EventEmitter<any>();
  @Output() public handleBtnAction: EventEmitter<ButtonActionModel> = new EventEmitter<ButtonActionModel>();
  @Output() public handleBtnPreview: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('matTable', { static: false }) public matTable!: MatTable<any>;
  @ViewChild('btnAddMoreTable') public btnAddMoreTable: ElementRef | undefined;
  @ViewChild('container') public container!: ElementRef;
  // #endregion
  @Input() public isDisableButton!: boolean;

  public utils = Utils;
  public columnDefinition: Array<IDisplayColumn> = [];
  public displayColumns: Array<string> = [];

  public noScroll: boolean = false;
  public fixSecondColumnLeftPos = false;
  public data = new MatTableDataSource();
  public toolTipText: boolean = false;
  public selectedRow: any;
  public selectionModel: SelectionModel<any> = new SelectionModel<any>(true, []);

  public constructor(
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'] && changes['dataSource'].currentValue) {
      const data: unknown[] = changes['dataSource'].currentValue.results;

      this.data = new MatTableDataSource(data);
    }

    if (changes['tableConfig'] && changes['tableConfig'].currentValue) {
      this.columnDefinition = this.tableConfig.columnDefinition;
      this.initData();
    }
  }

  public ngAfterContentChecked(): void {
    if (this.matTable) {
      this.matTable.updateStickyColumnStyles();
    }
  }

  public ngAfterViewChecked(): void {
    if (this.matTable) {
      this.matTable.updateStickyColumnStyles();
    }

    this.cdr.detectChanges();
  }

  public isNumber(format: any): boolean {
    return typeof format === 'number';
  }

  public isDateTime(format: any): boolean {
    return typeof format === 'string';
  }

  public onBtnClick(action: string, event: object): void {
    switch (action) {
      case 'delete':
        this.handleBtnAction.emit({ action: 'deleted', rowItem: event });
        break;

      case 'edit':
        this.handleBtnAction.emit({ action: 'edit', rowItem: event });
        break;

      default:
        break;
    }
  }

  public onBtnExportClick(target: HTMLElement): void {
    this.handleBtnAction.emit({ action: 'export' });
    target.closest('button')?.blur();
  }

  public onBtnAddMoreClick(): void {
    this.handleBtnAction.emit({ action: 'add' });
  }

  public onBtnPreviewClick(element: Array<IRadioOption>): void {
    this.handleBtnPreview.emit(element);
  }

  public onClickable(event: any): void {
  }

  public announceSortChange(event: any): void {
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selectionModel.clear();

      return;
    }

    this.selectionModel.select(...this.dataSource.results);

    return;
  }

  public isAllSelected(): boolean {
    const numSelected = this.selectionModel.selected.length;
    const numRows = this.dataSource.results.length;

    return numSelected === numRows;
  }

  public isSelectedItem(row: object): boolean {
    if (this.selectionModel.isSelected(row)) {
      return true;
    }

    return false;
  }

  public pipeNumber(format: number | string): number {
    return typeof format === 'number' ? format : 0;
  }

  public pipeDateTime(format: number | string): string {
    return typeof format === 'string' ? format : '0';
  }

  public onMouseOver(event: any, data: string): void {
    if (event.target.className.split(' ').includes('cell-overflow')) {
      const selectElement = event.target;

      if (selectElement.offsetWidth === selectElement.scrollWidth || Array.isArray(data)) {
        this.toolTipText = true;
      } else {
        this.toolTipText = false;
      }
    }
  }

  public isLastChildNotSticky(index: number): string {
    const lastColumn = this.columnDefinition[index + 1];

    if (lastColumn && lastColumn.stickyEnd) {
      return `${this.columnDefinition[index] ? this.columnDefinition[index].weight : 0} px`;
    }

    return 'auto';
  }

  private initData(): void {
    this.noScroll = this.tableConfig.noScroll || false;
    this.displayColumns = this.columnDefinition
      .map((value) => value.id);
  }

  public dataRadioColum(element: Array<IRadioOption>, data: string): string {
    return element.length > 0 && data ? (element.filter((x) => x.key === data))[0]?.value : '';
  }

  public dataZeroFill(data: string, numberZero: number): string {
    return data.toString().padStart(numberZero, '0');
  }

  public handleChangeHiddenOption(isHidden: boolean): void {
    this.isShowOption = isHidden;
  }

  public handelDbClick(row: any): void {
    // this.selectedRow = JSON.parse(JSON.stringify(row));
    this.tableClick.emit({ action: 'edit', rowItem: row });
  }

  public checkFocus(row: any): boolean {
    let idFocusedR = this.tableConfig.idFocusedRow;

    if (idFocusedR && this.selectedRow) {
      return this.selectedRow[idFocusedR] === row[idFocusedR];
    } else
      return this.utils.JsonToString(this.selectedRow) === this.utils.JsonToString(row);
  }


  @HostListener('click', ['$event'])
  public clickout(event: Event): void {
    const target = event.target as HTMLElement;

    if (target.parentElement?.parentElement?.parentElement?.parentElement?.id === 'showMore' || target.id === 'showMore'
      || target.parentElement?.parentElement?.id === 'showMore' || target.parentElement?.id === 'showMore' || target.parentElement?.parentElement?.parentElement?.id === 'showMore') {
      this.handleBtnAction.emit({ action: 'showMore' });
      target.closest('button')?.blur();
    } else
      if (
        target.parentElement?.parentElement?.parentElement?.id === 'edit' ||
        target.parentElement?.parentElement?.id === 'edit'
      ) {
        return;
      } else
        if (target.parentElement?.parentElement?.parentElement?.parentElement?.id === 'btnAddMoreTable' || target.id === 'btnAddMoreTable'
          || target.parentElement?.parentElement?.id === 'btnAddMoreTable' || target.parentElement?.id === 'btnAddMoreTable'
          || target.parentElement?.parentElement?.parentElement?.id === 'btnAddMoreTable') {
          this.handleBtnAction.emit({ action: 'addMoreTable' });
          target.closest('button')?.blur();
        } else
          if (target.parentElement?.parentElement?.parentElement?.parentElement?.id === 'exportCSV' || target.id === 'exportCSV'
            || target.parentElement?.parentElement?.id === 'exportCSV' || target.parentElement?.id === 'exportCSV' || target.parentElement?.parentElement?.parentElement?.id === 'exportCSV') {
            this.onBtnExportClick(target);
          } else
            if (target.id === 'plus') {
              this.handleBtnAction.emit({ action: 'addMoreTable' });
            } else
              if ((this.matTable['_elementRef'] as ElementRef).nativeElement &&
                !((this.matTable['_elementRef'] as ElementRef).nativeElement as HTMLTableElement).contains(event.target as Node)) {
                this.tableClick.emit({ action: 'clicked-outside' });

                if (this.matTable) {
                  this.matTable.updateStickyColumnStyles();
                }
              } else {
                if (this.matTable) {
                  this.matTable.updateStickyColumnStyles();
                }
              }
  }
}
