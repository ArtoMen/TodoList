import {Component, OnInit} from '@angular/core';
import {CardService} from "../services/card.service";
import {Card} from "../interfaces/interfaces";
import {FormControl, FormGroup} from "@angular/forms";
import {interval, take} from 'rxjs';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sort: string = 'statusDown';
  filterTitle: string = '';
  filterStatus: string = 'none';

  findForm: FormGroup = new FormGroup({
    cardTitle: new FormControl('')
  });

  public cards: Card[] = [];

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => this.cards = cards);
    this.cardService.getCreating().subscribe(card => this.cards.push(card));
  }

  deleteCard(id: string) {
    this.cardService.deleteCard(id).subscribe(() => {
      this.cards = this.cards.filter((card) => card.id !== id);
    });
  }

  setStatus(card: Card) {
    this.cardService.setStatus(card).subscribe((result) => {
      this.cards = this.cards.map((c) => {
        if(c.id === card.id) c.status = result.status;
        return c;
      });
    });

  }

  deleteFinished() {
    this.cards.forEach((card) => {
      if(card.status) this.deleteCard(card.id!)
    });
  }

  undoDone() {
    this.cards.forEach((card) => {
      if(card.status) this.setStatus(card);
    });
  }

  onSubmit() {
    this.filterTitle = this.findForm.value.cardTitle;
  }

  deleteAll() {
    const cards$ = interval(1000);
    cards$.pipe(take(this.cards.length)).subscribe(() => this.deleteCard(this.cards[0].id!));
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.filterTitle.trim()) return;
    if(this.cards[event.currentIndex].status !== this.cards[event.previousIndex].status) return;
    const tempCards = [...this.cards];
    moveItemInArray(tempCards, event.previousIndex, event.currentIndex);
    this.cards = tempCards;
  }


}
