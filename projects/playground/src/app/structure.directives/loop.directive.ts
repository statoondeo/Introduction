import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loopOf]',
})
export class LoopDirective {
  @Input('loopOf')
  array: any[] = [];
  oldArray: any[] = [];
  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}
  ngDoCheck() {
    if (this.oldArray.length === this.array.length) return;
    this.oldArray = [...this.array];
    this.containerRef.clear();
    this.array.forEach((item, index) => {
      this.containerRef.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index,
      });
    });
  }
}
