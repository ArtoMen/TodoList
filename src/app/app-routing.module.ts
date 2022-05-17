import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {AboutComponent} from "./about/about.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: '', component: TodoListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

