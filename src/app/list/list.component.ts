import {Component} from '@angular/core';
import {CardService} from "../services/card.service";
import {Card} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  sort: string = 'statusDown';
  filterTitle: string = '';
  filterStatus: string = 'none';

  public cards: Card[] = [];

  constructor(public cardService: CardService) {
    cardService.stream.subscribe((card) => {
      card.id = this.cards.length;
      this.cards.unshift(card);
      this.cards = [...this.cards];
    })
  }

  deleteCard(id: number) {
    this.cards.splice(id, 1);
  }

  setStatus(id:number) {
    console.log(this.cards, id);
    this.cards = this.cards.map((card) => {
      if(card.id === id) card.status = !card.status;
      return card;
    });
  }

  deleteFinished() {
    this.cards = this.cards.filter((card) => !card.status);
  }

  undoDone() {
    this.cards = this.cards.map((card) => {
      card.status = false;
      return card;
    });
  }

}
