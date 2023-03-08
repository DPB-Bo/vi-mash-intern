import { HttpClientResponse } from '@core/models/http-response.model';
import { DialogOptionApi } from '../dialog-seach-api/dialog-search-api.model';
import { DialogOption } from '../dialog-seach/dialog-seach.model';

export interface IDropList {
  value: string | number;
  label: string;
}

export interface ISearchCommon {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  format?: number | string;
  defaultValue?: string | Date;
  dataFrom?: IDropList[],
  dataTo?: IDropList[],
  validtorType?: string | null;
  width?: number;
  maxLength?: number;
  dataDialogSearch?: DialogOption | DialogOptionApi;
  radioList?: Array<Radio>,
  isDialogApi?: boolean,
  isHidden?: boolean;
}

export interface Radio {
  name: string,
  code: string
}

export class RadioSeach implements ISearchCommon {
  public type = 'radio';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public defaultValue: string,
    public radioList: Array<Radio>,
    public disabled?: boolean,
    public isHidden?: boolean
  ) { }
}

export class InputSearch implements ISearchCommon {
  public type = 'input';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public validatorType: string | null = null,
    public dataDialogSearch?: DialogOption,
    public isHidden?: boolean
  ) { }
}

export class InputTextSearch implements ISearchCommon {
  public type = 'input-text';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public validatorType: string | null = null,
    public dataDialogSearch?: DialogOption,
    public isHidden?: boolean
  ) { }
}

export class InputNumberSearch implements ISearchCommon {
  public type = 'inputNumber';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public validatorType: string | null = null,
    public dataDialogSearch?: DialogOption,
    public maxLength: number = 9,
    public isHidden?: boolean
  ) { }
}

export class FromToNumberSearch implements ISearchCommon {
  public type = 'input-number-from-to';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public validatorType: string | null = null,
    public dataDialogSearch?: DialogOption,
    public maxLength: number = 9,
    public isHidden?: boolean
  ) { }
}

export class DropListSearch implements ISearchCommon {
  public type = 'select';
  public constructor(
    public id: string,
    public name: string,
    public dataFrom: IDropList[],
    public width: number,
    public defaultValue: string = '',
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public isHidden?: boolean
  ) { }
}

export class DropListSearchYear implements ISearchCommon {
  public type = 'select-year';
  public constructor(
    public id: string,
    public name: string,
    public dataFrom: IDropList[],
    public width: number,
    public defaultValue: string,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public isHidden?: boolean
  ) { }
}

export class DateTimeSearch implements ISearchCommon {
  public type = 'date';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public defaultValue?: Date,
    public isHidden?: boolean
  ) { }
}

export class FromToSearch implements ISearchCommon {
  public type = 'input-from-to';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public format?: number | string,
    public defaultValue?: Date,
    public dataDialogSearch?: DialogOption | DialogOptionApi,
    public isDialogApi: boolean = false,
    public isHidden?: boolean
  ) { }
}

export class DropListFromToSearch implements ISearchCommon {
  public type = 'select-from-to';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public dataFrom: IDropList[],
    public dataTo: IDropList[],
    public defaultValue: string = '',
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public isHidden?: boolean
  ) { }
}

export class DropListFromToValidateSearch implements ISearchCommon {
  public type = 'selected-from-to-validate';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public dataFrom: IDropList[],
    public dataTo: IDropList[],
    public defaultValue: string = '',
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public isHidden?: boolean
  ) { }
}

export class DateTimeFromToSearch implements ISearchCommon {
  public type = 'date-from-to';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public defaultValue?: Date,
    public isHidden?: boolean
  ) { }
}

export class DateTimeFromToSearchValidate implements ISearchCommon {
  public type = 'dates-from-to-validate';
  public constructor(
    public id: string,
    public name: string,
    public width: number,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public defaultValue?: Date,
    public isHidden?: boolean
  ) { }
}

export interface IButtonConfig {
  btnSearchIcon: boolean;
  btnSearchLabel?: boolean;
  btnExportCsv?: boolean;
  btnAddMore?: boolean;
  btnSearchDefaultState?: boolean;
  btnSearch?: boolean;
  btnClear?: boolean;
  btnExecution?: boolean;
  btnPdf?: boolean;
}

export class ButtonConfig implements IButtonConfig {
  public constructor(
    public btnSearchIcon: boolean = true,
    public btnAddMore: boolean = false,
    public btnSearchLabel: boolean = false,
    public btnExportCsv: boolean = false,
    public btnSearchDefaultState: boolean = true,
    public btnSearch: boolean = true,
    public btnClear: boolean = true,
    public btnExecution: boolean = false,
    public btnPdf: boolean = false
  ) { }
}


export interface IConfigSearch {
  title: string | null;
  title2?: string;
  title3?: string;
  config: Array<ISearchCommon>;
}

export interface SelectSearchModel {
  fromControlName: string,
  value: string,
}

export class BlankBlock implements ISearchCommon {
  public type = 'blank';
  public constructor(
    public id: string,
    public name: string,
    public width: number
  ) { }
}


export interface DailyProcessModel {
  processDate: string;
  businessDate: string;
}

export interface DailyProcessDetail extends HttpClientResponse {
  data: DailyProcessModel
}
