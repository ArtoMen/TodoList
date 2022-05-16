import {Component} from '@angular/core';
import {CardService} from "../services/card.service";
import {Card} from "../app.component";
import {FormControl, FormGroup} from "@angular/forms";
import { interval, take } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  sort: string = 'statusDown';
  filterTitle: string = '';
  filterStatus: string = 'none';

  findForm: FormGroup = new FormGroup({
    cardTitle: new FormControl('')
  });

  public cards: Card[] = [];

  constructor(public cardService: CardService) {
    cardService.stream.subscribe((card) => {
      card.id = this.cards.length;
      this.cards.push(card);
      this.cards = [...this.cards];
    })
  }

  deleteCard(id: number) {
    this.cards = this.cards.filter((card) => card.id !== id);
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

  onSubmit() {
    this.filterTitle = this.findForm.value.cardTitle;
  }

  deleteAll() {
    const cards$ = interval(1000);
    cards$.pipe(take(this.cards.length)).subscribe((i: number) => this.deleteCard(i));
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.filterTitle.trim()) return;
    if(this.cards[event.currentIndex].status !== this.cards[event.previousIndex].status) return;
    const tempCards = [...this.cards];
    moveItemInArray(tempCards, event.previousIndex, event.currentIndex);
    this.cards = tempCards;
    console.log(this.cards);
  }
}
