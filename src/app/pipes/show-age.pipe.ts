import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAge',
  standalone: true
})
export class ShowAgePipe implements PipeTransform {
  text = ''
  transform(value: unknown, ...args: unknown[]): string {
    if (value) {
      this.text = `${value} years old`
    }
    return this.text;
  }

}
