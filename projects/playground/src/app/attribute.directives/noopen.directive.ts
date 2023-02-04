import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  @HostListener('click')
  onClick() {
    return false;
  }
}
