import { Pipe, PipeTransform } from '@angular/core';
import {Card} from "../app.component";

@Pipe({
  name: 'filterStatus',
  pure: false
})
export class FilterStatusPipe implements PipeTransform {

  transform(cards: Card[], argument: string): Card[] {
    if (argument === 'finished') return cards.filter((card) => card.status);
    else if (argument === 'notFinished') return cards.filter((card) => !card.status);
    return cards;
  }
}
