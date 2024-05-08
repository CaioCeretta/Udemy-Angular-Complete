import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /* Now i'm binding to a property named appUnless, which is the same name of the directive selector  and when some input
  parameter changes here, we are going to invoke a method and therefore we can implement a setter, and now it turns this
   into a method, though, technically, it is still a property and this is just the setter of that property */
  @Input() set appUnless(condition: boolean) {
  if(!condition) {
    this.vcRef.createEmbeddedView(this.templateRef)
  } else {
    this.vcRef.clear();
  }
}

/* This arguments are going to determine where we will place this directive in the document*/
constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

}



}
