/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { isNull } from 'lodash';

@Directive({
  selector: 'input[numbersZeroNull]'
})
export class NumberZeroNullDirective {

  public constructor(private _el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event']) onInputChange(event:InputEvent) {
    let initalValue = this._el.nativeElement.value;

    if(isNaN(Number(event.data))){
      if(Number(initalValue.replace(event.data, '')) > 0){
        this.control?.control?.patchValue(Number(initalValue.replace(event.data, '')));
      }else{
        this.control?.control?.patchValue(null);
      }
    }else
    if(!initalValue){
      this.control?.control?.patchValue(null);
    }else{
      initalValue = Number(initalValue.replaceAll(',',''));

      if(initalValue > 0){
        this.control?.control?.patchValue(initalValue,{ emitEvent: false});
      }else{
        this.control?.control?.patchValue(null,{ emitEvent: false});
      }
    }
  }

}
