export interface IOption {
  id: string;
  name: string;
  icon?: string;
  color?: string;
}

// export interface IStatusOption {
//   inputStatus: string;
//   isClosed: string;
// }

export interface IRadioOption {
  key: string,
  value: string,
}

export interface IDisplayColumn {
  id: string;
  type: string;
  name: string;
  weight?: number;
  alignCenter?: boolean;
  alignRight?: boolean;
  showTooltip?: boolean;
  tooltipAlign?: string;
  className?: string;
  options?: Array<IOption>;
  orderable?: boolean; // this can be either boolean or string id (for backward compatiable), to fix nested object compatibility;
  clickable?: boolean;
  disabled?: boolean;
  sticky?: boolean;
  stickyEnd?: boolean;
  localizedTextList?: string;
  format?: string | number | undefined;
  showSelectAll?: boolean;
  arrayTextValueRadio?: Array<IRadioOption> | undefined;
  zeroFill?: number | undefined,
  color?: string;
  backgroundColor?: string
}

export class TextZeroFillColumn implements IDisplayColumn {
  public type = 'text-zero-fill';
  public constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public showTooltip: boolean = false,
    public tooltipAlign?: string,
    public sticky?: boolean,
    public alignCenter: boolean = false,
    public alignRight: boolean = false,
    public className?: string,
    public stickyEnd?: boolean,
    public orderable: boolean = true,
    public zeroFill: number = 6
  ) { }
}

export class TextColumn implements IDisplayColumn {
  public type = 'text';
  public constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public showTooltip: boolean = false,
    public tooltipAlign?: string,
    public sticky?: boolean,
    public alignCenter: boolean = false,
    public alignRight: boolean = false,
    public className?: string,
    public stickyEnd?: boolean,
    public format?: string | number | undefined,
    public orderable: boolean = true
  ) { }
}

export class TextValueRadiOColumn implements IDisplayColumn {
  public type = 'text-value-radio';
  public constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public showTooltip: boolean = false,
    public tooltipAlign?: string,
    public sticky?: boolean,
    public alignCenter: boolean = false,
    public alignRight: boolean = false,
    public className?: string,
    public stickyEnd?: boolean,
    public arrayTextValueRadio?: Array<IRadioOption> | undefined,
    public orderable: boolean = true
  ) { }
}

export class SelectColumn implements IDisplayColumn {
  public type = 'select';
  public constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public orderable: boolean = true,
    public showSelectAll: boolean = false,

    public alignCenter?: boolean,
    public alignRight?: boolean,
    public className?: string,

    public clickable?: boolean,
    public disabled?: boolean,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class NumberColumn implements IDisplayColumn {
  public type = 'number';
  public constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable: boolean = true,
    public alignCenter?: boolean,
    public alignRight?: boolean,
    public clickable?: boolean,
    public format?: number, // ex: 1, 2 will formatted 0.1, 0.11
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class StatusColumn implements IDisplayColumn {
  public type = 'status';
  public constructor(
    public id: string,
    public name: string,
    public weight: number,
    // public statusOptions: Array<IStatusOption>,
    public orderable: boolean = true,
    public alignCenter?: boolean,
    public alignRight?: boolean,
    public clickable?: boolean,
    public sticky?: boolean,
    public stickyEnd?: boolean,
    public localizedTextList?: string,
    public isHtml?: boolean
  ) { }
}

export class OptionColumn implements IDisplayColumn {
  public type = 'options';
  public id = 'options';
  public name = 'Options';
  public alignRight = false;
  public showSelectAll = false;

  public constructor(
    public options: Array<IOption>,
    public weight: number,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class OptionMenuColumn implements IDisplayColumn {
  public type = 'menu';
  public id = 'menu';
  public name = 'Options';
  public alignRight = false;
  public showSelectAll = false;

  public constructor(
    public options: Array<IOption>,
    public weight: number,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class OptionButtonColumn implements IDisplayColumn {
  public type = 'button';
  public id = 'button';
  public name = 'Options';
  public alignRight = false;
  public showSelectAll = false;

  public constructor(
    public options: Array<IOption>,
    public weight: number,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class CheckboxColumn implements IDisplayColumn {
  public type = 'selection';
  public id = 'selection';
  public name = 'common-names.select';

  public constructor(
    public weight: number,
    public showSelectAll: boolean,
    public sticky?: boolean,
    public alignCenter?: boolean
  ) { }
}

export class IndexColumn implements IDisplayColumn {
  public type = 'index';

  public constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable?: boolean,
    public alignCenter?: boolean,
    public sticky?: boolean
  ) { }
}

export class DateTimeColumn implements IDisplayColumn {
  public type = 'date';

  public constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable: boolean = true,
    public alignRight?: boolean,
    public clickable?: boolean,
    public format: string = 'YYYY/MM/DD',
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class TextColorColumn implements IDisplayColumn {
  public type = 'textColor';
  public constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public showTooltip: boolean = false,
    public tooltipAlign?: string,
    public sticky?: boolean,
    public alignCenter: boolean = false,
    public alignRight: boolean = false,
    public className?: string,
    public stickyEnd?: boolean,
    public format?: string | number | undefined,
    public orderable: boolean = true
  ) { }
}

export class PreviewColumn implements IDisplayColumn {
  public type = 'preview';
  public constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public showTooltip: boolean = false,
    public tooltipAlign?: string,
    public sticky?: boolean,
    public alignCenter: boolean = false,
    public alignRight: boolean = false,
    public className?: string,
    public stickyEnd?: boolean,
    public format?: string | number | undefined,
    public color?: string,
    public backgroundColor?: string
  ) { }
}

