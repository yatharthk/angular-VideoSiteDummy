import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl'
})
@Injectable({
  providedIn: 'root'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl | null {
    if (value) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    return null;
  }
}