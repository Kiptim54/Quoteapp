import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}
  @HostListener("click") Onclicks(){
    this.changeColor("#FFC0CB")
  }

    private changeColor(action:any){
    this.elem.nativeElement.style.backgroundColor=action;
   }
  }

