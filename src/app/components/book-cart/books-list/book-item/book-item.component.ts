import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  
  @Input()
  livro!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
