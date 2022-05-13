import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appFinished]'
})
export class FinishedDirective {

  @Input('appFinished') status: boolean = false;

  @HostBinding('style.color') get getColor() {
    return this.status ? 'green' : 'red';
  }
  constructor() { }

}
