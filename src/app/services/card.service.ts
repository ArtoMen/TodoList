import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Card} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private stream$: Subject<Card> = new Subject<Card>();

  get stream() {
    return this.stream$.asObservable();
  }

  addCard(card: Card) {
    this.stream$.next(card);
  }
}
