import { Component} from '@angular/core';
import {CardService} from "./services/card.service";

export interface Card {
  id?: number,
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
  public sort = 'status';
  constructor(public cardService: CardService) {
  }
}
