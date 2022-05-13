import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormCreateComponent } from './form-create/form-create.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './card/card.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { SortArrayPipe } from './pipes/sort-array.pipe';
import { ListComponent } from './list/list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import { FilterTitlePipe } from './pipes/filter-title.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { FilterStatusPipe } from './pipes/filter-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormCreateComponent,
    SortArrayPipe,
    ListComponent,
    FilterTitlePipe,
    FilterStatusPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
