import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlightBold]'
})
export class HighlightBoldDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string="red"

  @Input('appHighlight') highlightColor: string

  @Input('appFontWeight') fontWeight: string='bold'

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor,this.fontWeight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }
   
  private highlight(color: string, fontWeight:string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight=fontWeight;
  }
}
