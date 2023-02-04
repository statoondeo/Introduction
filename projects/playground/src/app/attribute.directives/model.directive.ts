import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[model]',
})
export class ModelDirective {
  @Input('model')
  @HostBinding('value')
  value: any;

  @Output('modelChange')
  onValueChange = new EventEmitter();

  @HostListener('input', ['$event.target'])
  onInput(element: HTMLInputElement) {
    if (element.type === 'number') {
      this.onValueChange.emit(element.valueAsNumber);
      return;
    }
    this.onValueChange.emit(element.value);
  }
}
