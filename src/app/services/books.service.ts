import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../components/book-cart/books-list/model/book.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'data.json'
  private httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    
  }

  getBooks(): Observable<any> {
    return this.http.get("../../assets/books.json");
    }

}
