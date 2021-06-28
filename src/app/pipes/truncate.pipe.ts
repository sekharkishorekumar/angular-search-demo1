import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class StringTruncate implements PipeTransform {
  transform(value: string): string {
    if (value.length > 64) {
      return value.slice(0, 64);
    } else {
      return value;
    }
  }
}
