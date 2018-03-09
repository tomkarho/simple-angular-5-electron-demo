import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maxCharacter'
})

export class MaxCharacterPipe implements PipeTransform {
  transform(value: string, max: number): any {

    if (!value || value.length <= max) {
      return value;
    }

    return `${value.substring(0, max)}...`;
  }
}
