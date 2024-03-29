import { Pipe, PipeTransform } from '@angular/core';
import {Card} from "../interfaces/interfaces";

@Pipe({
  name: 'filterTitle',
  pure: false
})
export class FilterTitlePipe implements PipeTransform {

  transform(cards: Card[], argument: string): Card[] {
    return cards.filter((card) => card.title.toLocaleLowerCase().includes(argument.toLocaleLowerCase()));
  }

}
