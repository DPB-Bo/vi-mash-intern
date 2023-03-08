import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[separator]'
})
export class SeparatorDirective {

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(private _inputEl: ElementRef) {}

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('input', ['$event'])
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
  onInput(event: any) {
    if (this._inputEl.nativeElement.value === '-') return;

    let commasRemoved = this._inputEl.nativeElement.value.replace(/,/g, '');
    let toInt: number;
    let toLocale: string;

    if (commasRemoved.split('.').length > 1) {
      let decimal =isNaN(parseInt(commasRemoved.split('.')[1]))? '':parseInt(commasRemoved.split('.')[1]);

      toInt = parseInt(commasRemoved);
      toLocale = toInt.toLocaleString('en-US') + '.' + decimal;
    } else {
      toInt = parseInt(commasRemoved);
      toLocale = toInt.toLocaleString('en-US');
    }

    if (toLocale === 'NaN') {
      this._inputEl.nativeElement.value = '';
    } else {
      this._inputEl.nativeElement.value = toLocale;
    }
  }
}
