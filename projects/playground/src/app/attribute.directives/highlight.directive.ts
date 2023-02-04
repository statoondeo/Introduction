import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
  exportAs: 'hl',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @Input('highlight-color')
  highlightColor = 'yellow';

  @Input('highlight-base-color')
  baseColor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.highlightColor;
    this.colorChangeEvent.emit(this.color);
  }

  @HostListener('mouseout')
  onMouseExit() {
    this.color = this.baseColor;
    this.colorChangeEvent.emit(this.color);
  }

  @Output('color-changed')
  colorChangeEvent = new EventEmitter<string>();

  ngOnInit() {
    this.color = this.baseColor;
  }
}
