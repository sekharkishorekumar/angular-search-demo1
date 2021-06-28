import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = 'https://jsonplaceholder.typicode.com/comments?q=';
  public getContacts(searchItem: string): Observable<SearchData[]> {
    return this.httpClient.get<SearchData[]>(`${this.apiURL}${searchItem}`);
  }
}

export interface SearchData {
  email: string;
  body: string;
  name: string;
}

