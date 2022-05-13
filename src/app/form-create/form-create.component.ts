import {Component, EventEmitter, Output} from '@angular/core';
import {Card} from "../app.component";



@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent {

  @Output() onAdd: EventEmitter<Card> = new EventEmitter<Card>();

  title: string = '';
  description: string = ''

  constructor() { }

  create() {
    if(this.title.trim() && this.description.trim()) {
      const card: Card = {
        title: this.title,
        description: this.description,
        status: false
      }
      this.onAdd.emit(card);
      this.title = this.description = '';
    }
  }
}
