import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  @Input() backgroundColor!: string;

  constructor(private element: ElementRef) {
    // Doesn't work yet!  Check next commit
    this.element.nativeElement.style.backgroundColor = this.backgroundColor
   }

}
