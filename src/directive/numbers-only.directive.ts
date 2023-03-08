/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  public constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    // const initalValue = this._el.nativeElement.value;

    // this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');

    // if ( initalValue !== this._el.nativeElement.value) {
    //   event.stopPropagation();
    // }
  }
}
