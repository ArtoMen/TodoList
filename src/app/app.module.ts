import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormCreateComponent } from './form-create/form-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { FinishedDirective } from './directives/finished.directive';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { TodoListComponent } from './todo-list/todo-list.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpErrorInterceptor} from "./interceptors/http-error.interceptor";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormCreateComponent,
    SortArrayPipe,
    ListComponent,
    FilterTitlePipe,
    FilterStatusPipe,
    FinishedDirective,
    FilterStatusPipe,
    TodoListComponent,
    AboutComponent,
    ErrorPageComponent
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
    ReactiveFormsModule,
    DragDropModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
