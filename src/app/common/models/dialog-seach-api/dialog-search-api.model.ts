export interface IListHeaderApi {
  titleHeader: string,
  width: number,
  align?: 'right' | 'left' | 'center',
  format?: 'string' | 'YYYYMMDD' | 'YYYYMMDDHHMM' | 'YYYYMMDDHHMMSS',
  sticky?: boolean,
  isHidden?: boolean,
  nameColum: string;
}

export class ListHeaderApi implements IListHeaderApi {
  public titleHeader: string = '';
  public nameColum: string = '';
  public width: number = 100;
  public align?: 'right' | 'left' | 'center' = 'left';
  public sticky?: boolean = false;
  public isHidden?: boolean = false;
}

export interface ParamModel {
  key: string,
  value: string | number;
}

export interface IDialogOptionApi {
  title: string;
  listHeader: Array<ListHeaderApi>;
  width: number;
  height: number;
  url: string;
  columReturn: string;
  listParam: Array<ParamModel>
}

export class DialogOptionApi implements IDialogOptionApi {
  public title: string = '';
  public url: string = '';
  public columReturn: string = '';
  public width: number = 300;
  public height: number = 550;
  public listHeader: Array<ListHeaderApi> = [];
  public listParam: Array<ParamModel> = [];
}
