import {Component} from '@angular/core';
import {Card} from "../interfaces/interfaces";
import {CardService} from "../services/card.service";



@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent {
  title: string = '';
  description: string = ''

  constructor(private cardService: CardService) { }

  create() {
    if(this.title.trim() && this.description.trim()) {
      const card: Card = {
        title: this.title,
        description: this.description,
        status: false
      }
      this.cardService.createCard(card);
      this.title = this.description = '';
    }
  }
}
