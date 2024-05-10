import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // constructor(private el: ElementRef, private renderer: Renderer2) {}

  // @HostListener('click') onClick() {
  //   const classToAdd = 'open';
  //   const classExists = this.el.nativeElement.classList.contains(classToAdd)

  //   if(classExists) {
  //     this.renderer.removeClass(this.el.nativeElement, classToAdd);
  //   } else {
  //     this.renderer.addClass(this.el.nativeElement, classToAdd);
  //   }
  // }
  // or in a more simpler way

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }

}
