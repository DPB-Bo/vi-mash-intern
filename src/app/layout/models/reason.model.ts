import { HttpClientResponse } from '@core/models';

export interface reasonListModel extends HttpClientResponse {
  data:ReasonModel[];
}

export interface ReasonModel{
  delFlg: string,
  createDate: string,
  createBy: string,
  updateDate:string,
  updateBy: string,
  companyId: number,
  reason: string,
  reasonCode: string,
  reasonContent:string,
  notes: string
}
