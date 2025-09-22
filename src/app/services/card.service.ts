import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

 private baseUrl: string = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get<Card[]>(`${this.baseUrl}`)
  }
}
