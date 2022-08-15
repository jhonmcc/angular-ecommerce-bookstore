import { Component, OnInit } from '@angular/core';
import { Book } from './model/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  booksService: BooksService;
  livros: any;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data => {
      this.livros = data;
    }))
  }

}
