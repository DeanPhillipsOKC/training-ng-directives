import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(private element: ElementRef) {
    
   }

}
