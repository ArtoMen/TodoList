import { Component } from '@angular/core';

export interface Card {
  title: string,
  description: string,
  status: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cards: Card[] = [];

  createCard(card: Card) {
    this.cards.unshift(card);
    this.sort();
  }

  deleteCard(id: number) {
    this.cards.splice(id, 1);
  }

  setStatus(id:number) {
    this.cards[id].status = !this.cards[id].status;
    this.sort();
  }

  sort() {
    this.cards.sort((a, b) => Number(a.status) - Number(b.status));
  }

  deleteFinished() {
    this.cards = this.cards.filter((card) => !card.status);
  }

  UndoDone() {
    this.cards = this.cards.map((card) => {
      card.status = false;
      return card;
    });
  }
}
