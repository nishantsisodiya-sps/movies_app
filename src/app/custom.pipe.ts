import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class CustomPipe implements PipeTransform {

constructor(private senitizer : DomSanitizer){}

  transform(url : string){
    return this.senitizer.bypassSecurityTrustResourceUrl(url);
  }


}
