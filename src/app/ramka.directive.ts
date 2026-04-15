import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRamka]',
  standalone: false
})
export class RamkaDirective {

  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter')
  onMouseEnter(){
    this.border = '1px solid black';
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    this.border = 'none';
  }

  constructor(){}
}
