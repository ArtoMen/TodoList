import { Pipe, PipeTransform } from '@angular/core';
import {Card} from "../app.component";

@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {

  transform(cards: Card[], argument: string = 'status'): Card[] {
    console.log(1);
    const arr: Card[] = [...cards];
    if(argument === 'statusUp')  arr.sort((a, b) => Number(b.status) - Number(a.status));
    else if(argument === 'statusDown')  arr.sort((a, b) => Number(a.status) - Number(b.status));
    else if(argument === 'titleDown') arr.sort((a, b) => a.title.localeCompare(b.title));
    else if(argument === 'titleUp') arr.sort((a, b) => b.title.localeCompare(a.title));
    return arr;
  }
}
