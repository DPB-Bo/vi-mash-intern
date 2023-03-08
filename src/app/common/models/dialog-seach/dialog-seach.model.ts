
export interface IListHeader {
  titleHeader: string,
  nameColum: string,
  width: number,
  align?: 'right' | 'left' | 'center',
  format?: 'string' | 'YYYYMMDD' | 'YYYYMMDDHHMM' | 'YYYYMMDDHHMMSS',
  sticky?: boolean,
  isHidden?: boolean
}

export class ListHeader implements IListHeader {
  public titleHeader: string = '';
  public nameColum: string = '';
  public width: number = 100;
  public align?: 'right' | 'left' | 'center' = 'left';
  public format?: 'string' | 'YYYYMMDD' | 'YYYYMMDDHHMM' | 'YYYYMMDDHHMMSS' = 'string';
  public sticky?: boolean = false;
  public isHidden?: boolean = false;
}

export interface IDialogOption {
  title: string;
  table: string;
  columReturn: string;
  listHeader: Array<ListHeader>;
  width?: number;
  height?: number;
  litmit?: number;
  companyId?: boolean;
}

export class DialogOption implements IDialogOption {
  public constructor(
    public title: string = '',
    public table: string = '',
    public columReturn: string = '',
    public width: number = 300,
    public height: number = 525,
    public listHeader: Array<ListHeader> = [],
    public litmit: number = 100,
    public companyId: boolean = false
  ) { }
}

export interface MetaApiModel {
  code: number,
  field: string | null,
  message: string
}

export interface DataApiModel {
  data: Array<Array<string>>,
  errors: Array<string>,
  meta: MetaApiModel
}
