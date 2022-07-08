import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class FooDirective {
  @Input() highlight = 'lightblue';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
