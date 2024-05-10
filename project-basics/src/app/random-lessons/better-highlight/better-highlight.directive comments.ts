// import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

// /**
//  * In this code that are good approached to work with an element inside a directive
//  */

// @Directive({
//   selector: '[appBetterHighlight]'
// })
// export class BetterHighlightDirective implements OnInit {

//   @Input() defaultColor: string = 'transparent';

//   @Input() highlightColor: string = 'blue'

//   /* One thing we can notice in this case, is now that we have two 'directive like looking' things on the paragraph and
//   that is just property binding, and how does angular know if we want to bind to a property of paragraph, or to a property
//   of our directive.

//   We can bind to properties of our own directives by simply placing them in the same element utilizing the directive, enclosing
//   it with square brackets.

//   With ngClass we can see that the directive itself is enclosed with square brackets,

//   */

//   @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor

//   /**
//    *  This decorator is binding to some property which the value will become important
//    *
//    *  this is a new component property named backgroundColor, and in host binding we can pass a string defining to which
//    * property of the hosting element we want to bind
//    *
//    * so in the example above we are telling angular that on the element that this directive sits, to access the style property
//    *  then to access the backgroundColor, and set its value to the value of this property
//    *   */

//   constructor(private elRef: ElementRef, private renderer: Renderer2) { }

//   ngOnInit(): void {
//     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
//     this.backgroundColor = this.defaultColor
//   }

//   /*
//     This approach is better because in this example angular is not limited to running in the browser, it would also work
//     with service workers, environments where we may not have access to the DOM, if we try to access the native element
//     from the DOM, we might get an error in some circunstances, so it's a better practic to use the renderer
//   */

//   /**
//    * In the example above, we always are going to have a blue background on the element this directive is set on, and
//    * even though it's a good approach as it is, is not very interactive.
//    * Now if we only want that blue color on hover, and when the mouse is away the color goes back to transparent we do
//    * is utilizing a new directive in this case, the @HostListener()
//    *
//    * inside the HostListener we say the method we want to trigger, it would be like this
//    *
//    */

//   @HostListener('mouseenter') mouseOver(eventData: Event) {
//     // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
//     this.backgroundColor = this.highlightColor;
//   }

//   @HostListener('mouseleave') mouseLeave(eventData: Event) {
//     // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
//     this.backgroundColor = this.defaultColor
//   }


// }
