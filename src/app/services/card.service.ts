import {Injectable} from '@angular/core';
import {map, Observable, Subject} from "rxjs";
import {Card, ResponseServerCreate, ResponseServerGet, ResponseServerStatus} from "../interfaces/interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = 'https://todo-list-d4417-default-rtdb.firebaseio.com/cards';
  private create$: Subject<Card> = new Subject<Card>();

  constructor(private http: HttpClient) {
  }

  getCreating(): Observable<Card>{
    return this.create$.asObservable();
  }

  createCard(card: Card): void {
    this.http.post<ResponseServerCreate>(`${this.url}.json`, card)
      .pipe(
        map((res): Card => {
          return {...card, id: res.name}
        }),

      ).subscribe((card) => this.create$.next(card));
  }

  getCards(): Observable<Card[]> {
    return this.http.get<ResponseServerGet>(`${this.url}.json`)
      .pipe(map(res => {
        if (!res) return [];
        return Object.keys(res).map((key): Card => {
          return {id: key, ...res[key]}
        });
      }));
  }

  deleteCard(id: string): Observable<boolean> {
    return this.http.delete(`${this.url}/${id}.json`)
      .pipe(map((): boolean => {
        return true
      }));
  }

  setStatus(card: Card): Observable<ResponseServerStatus> {
    return this.http.patch<ResponseServerStatus>(`${this.url}/${card.id}.json`, {status: !card.status})
  }

}
