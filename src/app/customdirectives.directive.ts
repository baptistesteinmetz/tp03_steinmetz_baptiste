import { element } from 'protractor';
import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccErrorInput]'
})

export class ErrorInputDirective {

  // ErrClass: boolean = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private renderer: Renderer2,
              private el: ElementRef) {}

  @Input() set ccErrorInput(condition: boolean){
    // console.log(this.templateRef.elementRef);
    // console.log(this.viewContainer);
    // console.log(this.renderer);
    console.log(this.renderer);
    // const element = this.el.parentElement;
    if (!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }

}
