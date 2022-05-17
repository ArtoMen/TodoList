import { Pipe, PipeTransform } from '@angular/core';
import {Card} from "../interfaces/interfaces";

@Pipe({
  name: 'sortArray',
  pure: false
})
export class SortArrayPipe implements PipeTransform {

  transform(cards: Card[], argument: string = 'status'): Card[] {
    if(argument === 'statusUp')  cards.sort((a, b) => Number(b.status) - Number(a.status));
    else if(argument === 'statusDown')  cards.sort((a, b) => Number(a.status) - Number(b.status));
    else if(argument === 'titleDown') cards.sort((a, b) => a.title.localeCompare(b.title));
    else if(argument === 'titleUp') cards.sort((a, b) => b.title.localeCompare(a.title));
    return cards;
  }
}
