import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'purifyHTML'
})
export class PurifyHTMLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any): unknown {
    return this.sanitizer.sanitize( SecurityContext.HTML,value);
  }

}
