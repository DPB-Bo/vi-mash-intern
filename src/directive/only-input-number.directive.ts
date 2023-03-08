import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[validateNumber]'
})
export class ValidateNumberDirective {

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @Input('validateNumber') decimals = '';
  /**
   * Value before the decimal point specifies the number of digits before decimal and value after the decimal specifies the number of digits after decimal.
   * Example: 7.3 (Before decimal 7 digits & 3 digits after decimal)
   */
  public constructor(private el: ElementRef, private control: NgControl) { }

  private check(value: string): RegExpMatchArray | null {
    let [length, precision] = this.decimals.split('.'),
      regExpString = `^([\\d]{0,${+length}})((\\.{1})([\\d]{1,${+precision}})?)?$`;

    return String(value).match(new RegExp(regExpString));
  }

  private run(oldValue: string): void {
    setTimeout(() => {
      let currentValue: string = this.el.nativeElement.value;

      if (currentValue && !this.check(currentValue)) {
        this.control.control?.patchValue(oldValue);
      }
    });
  }


  @HostListener('keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent): void {
    this.run(this.el.nativeElement.value);
  }

  @HostListener('paste', ['$event'])
  private onPaste(event: ClipboardEvent): void {
    this.run(this.el.nativeElement.value);
  }

}
