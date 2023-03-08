export interface IDialogInformation {
  type: string;
  content: string;
  positive?: {
    title: string;
    click(data?: object): void;
  };
  negative: {
    title: string;
    click(): void;
  };
}
