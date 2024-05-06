import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  /*In this class we are going to create a basic attribute directive, just like [ngStyle] and [ngClass]

  Here we are building a directive that simply highlights an element on something like a hover

  in the selector we name it with a square bracket around it , which means that it can be applied to an element
  as an attribute. just like <div directiveSelector></div>
  */

  constructor(private elementRef: ElementRef) {

  }



  ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = 'green'
  }

  /*
    What we are doing here in this code is that we are getting access to the element where this directive was placed on
    and then overriding the style of this element

    In this case, we are creating a directive, but just like a component we need to declare it into the module
  */
}
