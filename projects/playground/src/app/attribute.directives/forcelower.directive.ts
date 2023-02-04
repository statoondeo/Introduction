import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'input[force-lower]',
})
export class ForceLowerDirective {
  @Input('value')
  @HostBinding('value')
  value: string = '';

  @HostListener('input', ['$event.target.value'])
  onInput(event: string) {
    this.value = event.toLowerCase();
  }

  ngOnInit() {
    this.value = this.value.toLowerCase();
  }
}
