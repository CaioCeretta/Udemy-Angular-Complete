
// import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-server-element',
//   templateUrl: './server-element.component.html',
//   styleUrls: ['./server-element.component.css'],
// })
// export class ServerElementComponent implements OnInit, OnChanges,
//   DoCheck, AfterContentInit,
//   AfterContentChecked, AfterViewInit,
//   AfterViewChecked, OnDestroy {
//   @Input('srvElement') element: {
//     type: string
//     name: string
//     content: string
//   };
//   @Input() name;
//   @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef
//   @ViewChild('heading', { static: true }) header;

//   /* This two console.logs are also going to be called whenever a new server is instantiated*/
//   constructor() {
//     console.log('constructor logged')
//   }

//   ngOnInit() {
//     console.log('ngOnInit called')
//     /*Here it still won't change the header, which we are getting from the reference at the template, but on the after
//     view init hook, we are able to see it */
//     console.log('Text Content' + this.header.nativeElement.textContent)
//     console.log('Text Content of the paragraph' + this.paragraph.nativeElement.textContent)

//   }


//   /*
//     ngOnChanges is called, as we said on the concepts, before the ngOnInit, and the changes argument, in this case, has
//     an element, which is, an object that has an element of the type simpleChange, and the element is our bound property
//     name the one on the @Input() reflected there and then angular gives us some simple informations on this element, the
//     important ones are the firstChange, which is a boolean and previousValue, if there is one

//     Now, in the app component, i created a change first method, which would change the first server name, and this onChanges
//     go triggered, which the previous value being the default and the current as the new one

//   */
//   ngOnChanges(changes: SimpleChanges) {
//     console.log('ngOnChanges called')
//     console.log(changes)
//   }

//   /*
//     Gets called whenever angular checks for any changes

//     the do check isn't a something that we want to run all the time, because it checks mostly every change, even the ones
//     that don't affect the DOM, so it may cost a log

//   */
//   ngDoCheck(): void {
//     console.log('ngDoCheck called')
//   }


//   /**
//    * Called after DoCheck, but this is called only once, it doesn't get initialized again, because the content is placed
//    *  one time
//    */

//   ngAfterContentInit(): void {
//     console.log('ngAfterContentInit called')
//   }

//   /**
//   Called after doCheck and after the content got initialized

//   */

//   ngAfterContentChecked(): void {
//     console.log('ngAfterContentChecked called')
//   }


//   /**
//    * both of these happens after the content has been checked
//    */

//   ngAfterViewInit(): void {
//     console.log('ngAfterViewInit called')
//     console.log('Text Content' + this.header.nativeElement.textContent)
//     console.log('Text Content' + this.paragraph.nativeElement.textContent)

//   }


//   ngAfterViewChecked(): void {
//     console.log('ngAfterViewChecked called')

//   }

//   /**
//    * Called when an element gets destroyed
//    */

//   ngOnDestroy(): void {
//     console.log('ngOnDestroy called')

//   }


// }


