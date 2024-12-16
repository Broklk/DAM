import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFecha',
  standalone: true,
})
export class FormatFechaPipe implements PipeTransform {
  transform(value: string): string {
    return new Date(value).toLocaleString();
  }
}
