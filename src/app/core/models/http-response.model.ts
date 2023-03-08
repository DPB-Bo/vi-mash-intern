/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MetaModel {
  code: string;
  field: string | null;
  message: string;
}

export interface DataModel {
  length: number,
  currentPage: number,
  noRecordInPage: number,
  results: object[],
  totalPage: number,
  totalRecords: number,
  countRecords: number,
}

export interface HttpClienRequest {
  page: number;
  size: number;
  column?:string;
  sort?:string;
}

export interface HttpClientResponse {
  data: DataSearchModel | any;
  errors: object[];
  meta: MetaModel;
}

export class DataSearchModel implements DataModel {
  public constructor(
    public length: number = 0,
    public currentPage: number = 0,
    public noRecordInPage: number = 0,
    public results: any[] = [],
    public totalPage: number = 0,
    public totalRecords: number = 0,
    public countRecords: number = 0
  ) { }
}
