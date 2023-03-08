/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClientResponse } from '@core/models';

/* eslint-disable @typescript-eslint/naming-convention */
export interface LoginModelResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface LoginModelRequest {
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface MetaModel {
  code: string;
  field: string | null;
  message: string;
}

export interface RoleModel {
  role: string,
}

export interface DataUserLoginModel {
  roles: Array<RoleModel>,
  delFlg: string,
  createBy: string,
  userId: number,
  userName: string,
  mail: string,
  phone: string,
  lockUser: number | null
}

export interface HttpClienUserLogintResponse extends HttpClientResponse {
  data: DataUserLoginModel;
}

export interface CommonSettingArrayModel {

  CAL_ROUND_TYPE?: CommonSettingModel | any;
  COMPANY_ALIAS_NAME?: CommonSettingModel | any;
  INVENTORY_PRODUCT_TYPE?: CommonSettingModel | any;
  NUM_DAY_EDIT_RETURN_PRODUCT?: CommonSettingModel | any;
  TAX_RATE?: CommonSettingModel | any;
  TAX_ROUND_TYPE?: CommonSettingModel | any;
  TOTAL_ROUND_TYPE?: CommonSettingModel | any;
  MAXIMUM_PRINT_QUANTITY?: CommonSettingModel | any;
  REPOSITORY_ALIAS_CODE_DEFAULT?: CommonSettingModel | any;
  MAXIMUM_SEARCH_RECORDS?: CommonSettingModel | any;
}

export class codeOfCommonSettings {
  public CAL_ROUND_TYPE: keyof CommonSettingArrayModel = 'CAL_ROUND_TYPE';
  public COMPANY_ALIAS_NAME: keyof CommonSettingArrayModel = 'COMPANY_ALIAS_NAME';
  public INVENTORY_PRODUCT_TYPE: keyof CommonSettingArrayModel = 'INVENTORY_PRODUCT_TYPE';
  public NUM_DAY_EDIT_RETURN_PRODUCT: keyof CommonSettingArrayModel = 'NUM_DAY_EDIT_RETURN_PRODUCT';
  public TAX_RATE: keyof CommonSettingArrayModel = 'TAX_RATE';
  public TAX_ROUND_TYPE: keyof CommonSettingArrayModel = 'TAX_ROUND_TYPE';
  public TOTAL_ROUND_TYPE: keyof CommonSettingArrayModel = 'TOTAL_ROUND_TYPE';
  public MAXIMUM_PRINT_QUANTITY: keyof CommonSettingArrayModel = 'MAXIMUM_PRINT_QUANTITY';
  public REPOSITORY_ALIAS_CODE_DEFAULT: keyof CommonSettingArrayModel = 'REPOSITORY_ALIAS_CODE_DEFAULT';
  public MAXIMUM_SEARCH_RECORDS: keyof CommonSettingArrayModel = 'MAXIMUM_SEARCH_RECORDS';
}

export interface CommonSettingModel {
  code: keyof CommonSettingArrayModel;
  company_id?: number;
  createBy?: number;
  createDate?: string;
  delFlg?: string;
  description?: string;
  idx: number;
  updateBy?: number;
  updateDate?: string;
  value1: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
}
