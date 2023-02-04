import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[if]',
})
export class IfDirective {
  @Input('if')
  condition: boolean = false;
  @Input('ifElse')
  elseTemplate?: TemplateRef<any>;
  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}
  ngOnChanges() {
    this.containerRef.clear();
    if (this.condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
      return;
    }
    if (this.elseTemplate) {
      this.containerRef.createEmbeddedView(this.elseTemplate);
    }
  }
}
