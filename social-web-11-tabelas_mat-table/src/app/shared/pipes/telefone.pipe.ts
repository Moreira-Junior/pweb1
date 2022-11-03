import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(num: number): string {
    const value = String(num);
    if (value.length === 8) {
      return `9${value.substr(0, 4)}-${value.substr(4, 4)}`;
    } else if(value.length === 10){
      return `(${value.substr(0, 2)})9${value.substr(2, 4)}-${value.substr(4, 4)}`;
    } else if(value.length === 11){
      return `(${value.substr(0, 3)})9${value.substr(2, 4)}-${value.substr(4, 4)}`;
    }
    return value;
  }

}
