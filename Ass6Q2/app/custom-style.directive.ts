import { Directive, ElementRef, Renderer } from '@angular/core';
//import { style } from '@angular/animations';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef, renderer: Renderer) 
  {
  //  ele.nativeElement.style.background='yellow';
    //ele.nativeElement.fontstyle ='italic';
   console.log(this.ele);
this.setcolor('yellow','Bold' );
  }
  setcolor(color:string,fnt:any)
  {
    this.ele.nativeElement.style.background='yellow';
    this.ele.nativeElement.style.fontStyle ='italic';



  }
}
