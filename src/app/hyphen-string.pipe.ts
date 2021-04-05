import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenString'
})
export class HyphenStringPipe implements PipeTransform {

  hyphen:string="-"
  transform(value: string): string {
    
    return this.hyphen.concat(value.concat(this.hyphen))
  }

}
