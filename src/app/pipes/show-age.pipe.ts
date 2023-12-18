import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAge',
  standalone: true
})
export class ShowAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if (value) {
      const text = `${value} years old`
      return text;
    }
  }

}
